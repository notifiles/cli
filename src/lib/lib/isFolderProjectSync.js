// import { project } from "@notifiles/sdk"
import { project } from "../../../../sdk/src/index.js"

export default (folder) => {
  return project.isProjectsync({ path: folder })
}
