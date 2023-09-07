import { deleteLink } from '../../../models/links.mjs'
import { checkAuth } from '../lib/check-auth.mjs'

export const post = [checkAuth,postLinks]

export async function postLinks (req) {
  const id = req.pathParameters?.id
  let link = await deleteLink(id)
  return {
    json: { link },
    location: '/links'
  }
}