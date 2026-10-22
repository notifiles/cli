import { template } from "@notifiles/sdk"
// import { template } from "../../../../sdk/src/index.js"
import * as envfile from 'envfile'
import fs from 'fs'
import fsPath from 'path'
import { pathToFileURL } from 'url'

// The app's notifiles.config.js, or null when it has none or it cannot be read.
const appConfigOf = async ({ appPath }) => {
  const configPath = fsPath.resolve(appPath, 'notifiles.config.js')
  if (!fs.existsSync(configPath)) {
    return null
  }
  try {
    const module = await import(pathToFileURL(configPath).href)
    return module?.default || null
  } catch (error) {
    console.log(`Could not read ${configPath}: ${error?.message}`)
    return null
  }
}

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

    // Without this, adaptSettings() falls back to "en_us" (underscore), which
    // never matches an app's real i18n.json keys (e.g. "en-us") and silently
    // injects an empty phantom locale version into every template's sync.
    settings.defaultLocale = envContent['DEFAULT_LOCALE'] || 'en-us'

    // The app's locales, from its notifiles.config.js (`locales: { default, languages: { en: 'en-us' } }`): the
    // default locale and each language's default locale, written into the locales index the sync publishes
    // (locales.json), which senders read to pick the best locale a template has for a reader.
    const appConfig = await appConfigOf({ appPath: CliNext.payload.appPath })
    if (appConfig?.locales?.default) {
      settings.defaultLocale = appConfig.locales.default
    }
    if (appConfig?.locales?.languages) {
      settings.languageDefaults = appConfig.locales.languages
    }

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
