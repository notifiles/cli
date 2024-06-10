import { template } from "@notifiles/sdk"
// import { post } from "../../../../sdk/src/index.js"

export default ({
  _clinextType: 'command',
  name: 'new',
  position: 0,
  description: `Create a post`,
  questions: [
    {
      name: 'appPath',
    },
    {
      name: 'templateName',
      validators: [{
        id: 'nonempty',
        params: { maxParams: 12 }
      }]
    },
  ],
  example: "$0 template new --templateTitle='My post title'",
  handler: async () => {
    await CliNext.prompt.ask([
      {
        name: 'appPath',
      },
      {
        name: 'templateName',
      },
    ])

    const path = `${CliNext.payload.appPath}/src/source`
    await template.create({
      title: CliNext.payload.templateName,
      path,
      force: true
    })

    console.log(`${CliNext.payload.templateName} has been created at ${CliNext.payload.destination}`)
  },
})
