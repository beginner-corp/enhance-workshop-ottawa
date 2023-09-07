import { getLink, upsertLink } from '../../models/links.mjs'

export async function get (req) {
  const id = req.pathParameters?.id
  const result = await getLink(id)
  return {
    json: { link: result }
  }
}

export async function post (req) {
  const id = req.pathParameters?.id
  const result = await upsertLink({ ...req.body, key: id })
  return {
    json: { link: result },
    location: '/links'
  }
}