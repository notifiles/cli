import { cloud as cloudOps } from "@notifiles/sdk"
// import { cloud as cloudOps } from "../../../../sdk/src/index.js"

export default ({
  _clinextType: "command",
  name: 'list',
  description: 'List project cdns',
  questions: [
    {
      name: 'appPath',
    },
  ],
  example: "$0 cloud list",
  handler: async () => {
    await CliNext.prompt.ask([
      {
        name: 'appPath',
      },
    ])

    const clouds = await cloudOps.list({
      path: CliNext.payload.appPath,
    })

    console.log(clouds ? clouds.map(p => p.id).join(', ') : "No cloud found")
  },
})
