import { project } from "@mastermail/sdk"

export default ({
  _clinextType: "command",
  name: 'new',
  description: 'Create an empty mastermail project ✍️',
  questions: [
    {
      name: 'projectName',
    },
    {
      name: 'destination',
    }
  ],
  example: "$0 project new",
  handler: async () => {
    await CliNext.prompt.ask([
      {
        name: 'projectName',
      },
      {
        name: 'destination',
      },
    ])

    await project.newProject.plain({
      name: CliNext.payload.projectName,
      path: CliNext.payload.destination,
      force: true
    })

    console.log(`${CliNext.payload.projectName} has been created at ${CliNext.payload.destination}`)
  },
})
