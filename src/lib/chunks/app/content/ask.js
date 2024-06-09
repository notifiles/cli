
export default async () => {

  CliNext.ui.drawSectionHeader({
    type: 'h2',
    title: `App informations 🚀`,
    subTitle: `notifiles required general informations.`
  })

  await CliNext.prompt.ask([
    {
      name: 'destination',
    },
    {
      name: 'appName',
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
  ])

  return true
}




