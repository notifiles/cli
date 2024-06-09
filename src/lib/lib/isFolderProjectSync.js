import { project } from "@notifiles/sdk"

export default (folder) => {
  return project.isProjectsync({ path: folder })
}
