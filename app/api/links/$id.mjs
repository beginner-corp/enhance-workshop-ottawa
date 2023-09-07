import { getLink, upsertLink } from '../../models/links.mjs'
import { checkAuth } from '../lib/check-auth.mjs'

export const get = [checkAuth,listLinks]
export const post = [checkAuth,postLinks]

export async function listLinks (req) {
  const id = req.pathParameters?.id
  const result = await getLink(id)
  return {
    json: { link: result }
  }
}

export async function postLinks (req) {
  const id = req.pathParameters?.id
  const result = await upsertLink({ ...req.body, key: id })
  return {
    json: { link: result },
    location: '/links'
  }
}