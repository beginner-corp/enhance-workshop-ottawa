import { deleteLink } from '../../../models/links.mjs'

export async function post (req) {
  const id = req.pathParameters?.id
  let link = await deleteLink(id)
  return {
    json: { link },
    location: '/links'
  }
}