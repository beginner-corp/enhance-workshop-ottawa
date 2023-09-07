import { getLinks, upsertLink } from '../models/links.mjs'

export async function get (req) {
  const links = await getLinks()
  return {
    json: { links }
  }
}

export async function post (req) {
  await upsertLink(req.body)
  return {
    location: '/links'
  }
}