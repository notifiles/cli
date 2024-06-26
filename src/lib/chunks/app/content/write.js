
export default async (props = {}) => {
  const {
    destination = CliNext.payload.destination
  } = props
  const { payload } = CliNext
  await CliNext.fs.chunks.copy({
    destination,
    source: '**/*',
    data: {
      ...payload,
      appDescription: "My notifiles app",
    }
  })

  return true
}
