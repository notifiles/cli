import { template } from "@notifiles/sdk"
// import { template } from "../../../../sdk/src/index.js"
import * as envfile from 'envfile'
import fs from 'fs'

export default ({
  _clinextType: 'command',
  name: 'build',
  position: 0,
  description: `Build posts`,
  questions: [
    {
      name: 'appPath',
    },
    {
      name: 'force',
      type: 'boolean',
      alias: 'f',
      description: 'Force update templates (ignore cache)',
    },
  ],
  example: "$0 build",
  handler: async () => {
    await CliNext.prompt.ask([
      {
        name: 'appPath',
      },
    ])

    const settings = {
      forceUploadAttachments: false,
      dryRun: true
    }

    const envfilePath = `${CliNext.payload.appPath}/.env`
    let envContent = await fs.promises.readFile(envfilePath, 'utf8')
    envContent = envfile.parse(envContent)

    // Without this, adaptSettings() falls back to "en_us" (underscore), which
    // never matches an app's real i18n.json keys (e.g. "en-us") and silently
    // injects an empty phantom locale version into every template's sync.
    settings.defaultLocale = envContent['DEFAULT_LOCALE'] || 'en-us'

    switch (envContent['CLOUD_TYPE']) {
      case 'minio': {
        settings.clouds = [{
          id: "minio",
          auth: {
            endPoint: envContent['MINIO_ENDPOINT'],
            accessKey: envContent['MINIO_ACCESS_KEY'],
            secretKey: envContent['MINIO_SECRET'],
            bucketName: envContent['MINIO_BUCKET_NAME']
          }
        },]
        break
      }
      case 'bunny': {
        settings.clouds = [{
          id: "bunny",
          auth: {
            accessKey: envContent['BUNNY_ACCESS_KEY'],
            storageZoneName: envContent['BUNNY_STORAGE_ZONE_NAME'],
          }
        },]
        break
      }
      default: {
        console.log(`No cloud found in env file. `)
        return
      }

    }
    const path = `${CliNext.payload.appPath}/templates`
    await template.update.processPath({
      path,
      settings,
      force: CliNext.payload.force,
    })

    console.log(`Templates have been built at ${CliNext.payload.appPath}`)
  },
})
