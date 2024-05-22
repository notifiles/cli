import { project } from "@mastermail/sdk"

export default async (folder) => {
  return project.isProject({ path: folder })
}
