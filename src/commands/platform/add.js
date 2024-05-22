import { platform } from "@mastermail/sdk"
// import { platform } from "../../../../sdk/src/index.js"

export default ({
  _clinextType: "command",
  name: 'add',
  description: 'Add a platform',
  questions: [
    {
      name: 'projectPath',
    },
    {
      name: 'platformId',
    },
    {
      name: 'platformToken',
    },
  ],
  example: "$0 project new",
  handler: async () => {
    await CliNext.prompt.ask([
      {
        name: 'projectPath',
      },
      {
        name: 'platformId',
      },
      {
        name: 'platformToken',
      },
    ])

    const auth = {
      token: CliNext.payload.platformToken,
    }
    const { isValid, error } = await platform.add({
      path: CliNext.payload.projectPath,
      platform: {
        id: CliNext.payload.platformId,
        auth
      }
    })

    await CliNext.store.save({
      key: `platform_auth_${CliNext.payload.platformId}`,
      value: JSON.stringify(auth)
    })

    if (isValid) {
      console.log(`${CliNext.payload.platformId} has been added`)
    }
    else {
      console.log(`Could not add platform: ${error.message}`)
    }
  },
})
