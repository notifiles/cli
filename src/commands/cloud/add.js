// import { cloud as cloudOps } from "../../../../sdk/src/index.js"
import * as envfile from 'envfile'
import fs from 'fs'
export default ({
  _clinextType: "command",
  name: 'add',
  description: 'Add a cdn',
  questions: [
    {
      name: 'appPath',
    },
    {
      name: 'cloudType',
    },
    {
      name: 'cloudBucketName',
    },
    {
      name: 'cloudEndPoint',
    },
    {
      name: 'cloudSecretKey',
    },
    {
      name: 'cloudAccessKey',
    },
    {
      name: 'bunnyPullZone',
    },
    {
      name: 'bunnyStorageZoneName',
    },
  ],
  example: "$0 cloud new",
  handler: async () => {
    await CliNext.prompt.ask([
      {
        name: 'appPath',
      },
      {
        name: 'cloudType',
      },
    ])
    const envfilePath = `${CliNext.payload.appPath}/.env`
    let envContent = await fs.promises.readFile(envfilePath, 'utf8')
    envContent = envfile.parse(envContent)

    switch (CliNext.payload.cloudType) {
      case 'minio': {
        await CliNext.prompt.ask([
          {
            name: 'cloudBucketName',
          },
          {
            name: 'cloudEndPoint',
          },
          {
            name: 'cloudSecretKey',
          },
          {
            name: 'cloudAccessKey'
          }
        ])
        envContent['MINIO_ENDPOINT'] = CliNext.payload.cloudEndPoint
        envContent['MINIO_ACCESS_KEY'] = CliNext.payload.cloudAccessKey
        envContent['MINIO_SECRET'] = CliNext.payload.cloudSecretKey
        envContent['MINIO_BUCKET_NAME'] = CliNext.payload.cloudBucketName
        break
      }
      case 'bunny': {
        await CliNext.prompt.ask([
          {
            name: 'cloudAccessKey',
          },
          {
            name: 'bunnyPullZone',
          },
          {
            name: 'bunnyStorageZoneName',
          },
        ])
        envContent['BUNNY_ACCESS_KEY'] = CliNext.payload.cloudAccessKey
        envContent['BUNNY_STORAGE_ZONE_NAME'] = CliNext.payload.bunnyStorageZoneName
        envContent['BUNNY_PULL_ZONE'] = CliNext.payload.bunnyPullZone

        break
      }
      default:
        return
    }


    envContent['CLOUD_TYPE'] = CliNext.payload.cloudType
    await fs.promises.writeFile(envfilePath, envfile.stringify(envContent))
    console.log(`${CliNext.payload.cloudType} has been added`)
  },
})
