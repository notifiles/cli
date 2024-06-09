import { template } from "@notifiles/sdk"
// import { platform, post } from "../../../sdk/src/index.js"

export default ({
  _clinextType: "command",
  name: 'sync',
  description: 'Sync a project',
  questions: [
    {
      name: 'appPath',
    },
  ],
  example: "$0 sync",
  handler: async () => {

    await CliNext.prompt.ask([
      {
        name: 'appPath',
      },
    ])


    let clouds = await CliNext.store.get({
      key: `cloud_data`,
    })

    if (!clouds) {
      console.log('Please add a cloud CDN host. notifiles cloud add')
      return
    }
    clouds = JSON.parse(clouds)

    const settings = {
      // platforms,
      clouds
    }

    await template.update.processPath({
      path: CliNext.payload.appPath,
      settings
    })
  },
})
