import { getLinks } from "../models/links.mjs"

export async function get() {
  const links = await getLinks()
  const publishedLinks = links.filter(link => link.published)
  return {
    json: {
      page: {
        title: 'Themes',
        description: 'Custom properties and calc'
      },
      links:publishedLinks
    }
  }
}