import { project } from "@notifiles/sdk"

export default async (folder) => {
  return project.isProject({ path: folder })
}
