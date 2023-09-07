import { getLinks, upsertLink } from '../models/links.mjs'
import { checkAuth } from '../lib/check-auth.mjs'

export const get = [checkAuth,listLinks]
export const post = [checkAuth,postLinks]

export async function listLinks (req) {
  const links = await getLinks()
  return {
    json: { links }
  }
}

export async function postLinks (req) {
  await upsertLink(req.body)
  return {
    location: '/links'
  }
}