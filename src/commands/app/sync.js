import { template } from "@notifiles/sdk"
// import { template } from "../../../../sdk/src/index.js"
import * as envfile from 'envfile'
import fs from 'fs'

export default ({
  _clinextType: 'command',
  name: 'sync',
  position: 0,
  description: `Sync posts`,
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
  example: "$0 sync",
  handler: async () => {
    await CliNext.prompt.ask([
      {
        name: 'appPath',
      },
    ])

    const settings = {
      forceUploadAttachments: false,
      dryRun: false
    }

    const envfilePath = `${CliNext.payload.appPath}/.env`
    let envContent = await fs.promises.readFile(envfilePath, 'utf8')
    envContent = envfile.parse(envContent)

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

    console.log(`Templates have been synced at ${CliNext.payload.appPath}`)
  },
})
