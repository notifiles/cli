import slug from 'slug'
import ChunkAppContent from '../../lib/chunks/app/content/index.js'

export default ({
  _clinextType: 'command',
  name: 'new',
  position: 0,
  description: `Create an empty Notifiles project 🐻`,
  questions: [
    {
      name: 'appName',
      type: 'string',
      promptType: 'input',
      alias: 'n',
      defaultValue: 'MyAppName',
      message: 'App name',
      validators: [{ id: 'nonempty', params: { maxParams: 12 } }]
    },
    {
      name: 'appDescription',
      type: 'string',
      promptType: 'input',
      defaultValue: 'A Servable app',
      message: 'App description',
      validators: [{ id: 'nonempty', params: { maxParams: 12 } }]
    },
    {
      name: 'installDependencies',
      message: 'Install dependencies'
    },
    {
      name: 'license',
    },
    {
      name: 'packageManager',
    },
    {
      name: 'gitInit',
    },
    {
      name: 'destination',
    },
  ],
  example: "$0 app new --appName='MyApp'",
  handler: async () => {
    const passed = await ChunkAppContent.ask()
    if (!passed) {
      return
    }
    CliNext.payload.appId = slug(CliNext.payload.appName)
    CliNext.payload.destination = `${CliNext.payload.destination}/${CliNext.payload.appId}`
    await ChunkAppContent.write()
  },
})
