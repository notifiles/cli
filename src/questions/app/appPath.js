
export default ({
  _clinextType: "question",
  type: 'string',
  message: "Choose a notifiles app",
  promptType: "file-tree-selection",
  name: "appPath",
  onlyShowDir: true,
  root: "./",
  onlyShowValid: false,
  enableGoUpperDirectory: true,
  hideRoot: false,
  hideChildrenOfValid: true,
  hideValidationErrorMessage: true,
  validators: [{
    id: 'isFolderProject'
  }],
  transformers:
    [{
      id: 'isFolderProject',
      modes: ['display'],
    }]
})
