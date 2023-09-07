import { getLink, upsertLink, validate } from '../../models/links.mjs'
import { checkAuth } from '../../lib/check-auth.mjs'

export const get = [checkAuth, listLink]

export async function listLink (req) {
  if (req.session.problems) {
    let { problems, link, ...session } = req.session
    return {
      session,
      json: { problems, link }
    }
  }

  const id = req.pathParameters?.id
  const result = await getLink(id)
  return {
    json: { link: result }
  }
}

export const post = [checkAuth, updateLink]

export async function updateLink (req) {
  const id = req.pathParameters?.id

  const session = req.session
  // Validate
  let { problems, link } = await validate.update(req)
  if (problems) {
    return {
      session: {...session, problems, link },
      json: { problems, link },
      location: `/links/${link.key}`
    }
  }

  // eslint-disable-next-line no-unused-vars
  let { problems: removedProblems, link: removed, ...newSession } = session
  try {
    const result = await upsertLink({ key: id, ...link })
    return {
      session: newSession,
      json: { link: result },
      location: '/links'
    }
  }
  catch (err) {
    return {
      session: { ...newSession, error: err.message },
      json: { error: err.message },
      location: '/links'
    }
  }
}