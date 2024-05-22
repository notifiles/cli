import { project } from "@mastermail/sdk"

export default (folder) => {
  return project.isProjectsync({ path: folder })
}
