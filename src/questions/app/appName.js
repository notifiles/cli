// import capitalizeFirstLetter from "../../lib/newlib/capitalizeFirstLetter"
export default ({
  _clinextType: "question",
  name: 'appName',
  type: 'string',
  promptType: 'input',
  message: 'Project name',
  transformers: [
    {
      modes: ['out', 'display'],
      handler: ({ input }) => capitalizeFirstLetter(input)
    }
  ],
  // sideEffects: [
  //   {
  //     position: "after",
  //     type: "payload",
  //     name: "appId",
  //     "template": "<%= appName %>",
  //   }
  // ]
})

const capitalizeFirstLetter = (string) => {
  if (!string || string.length === 0) {
    return string
  }
  let hasUnderscore = string.charAt(0) === "_"
  if (hasUnderscore && string.length === 1) {
    return string
  }
  const firstLetterCharIndex = hasUnderscore ? 1 : 0
  switch (firstLetterCharIndex) {
    case 1:
      return `_${string.charAt(1).toUpperCase() + string.slice(2)}`
    default:
      return string.charAt(firstLetterCharIndex).toUpperCase() + string.slice(1)
  }
}
