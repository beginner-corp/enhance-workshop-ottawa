import { getLinks, upsertLink, validate } from '../models/links.mjs'
import { checkAuth } from '../lib/check-auth.mjs'

export const get = [checkAuth,listLinks]
export const post = [checkAuth,postLinks]

export async function listLinks (req) {
  const links = await getLinks()
  if (req.session.problems) {
  // 5. Back at the form we pull the problems and initial values off the session
    let { problems, link, ...session } = req.session
    return {
      session,
      // 6. The HTML page can get problems and initial values off the store
      json: { problems, links, link }
    }
  }

// 1. First user gets a blank form to fill out
  return {
    json: { links }
  }
}

export async function postLinks (req) {
  const session = req.session
  // 2. Validate form inputs and return problems
  let { problems, link } = await validate.create(req)
  if (problems) {
    return {
    // 3. Problems and initial values added to session
      session: { ...session, problems, link },
      // Used for progressive enhancement next module
      json: { problems, link },
      // 4. Redirects back to the form with the above session
      location: '/links'
    }
  }

  // If validation is successful the problems and old values are removed from the session
  // eslint-disable-next-line no-unused-vars
  let { problems: removedProblems, link: removed, ...newSession } = session
  try {
    const result = await upsertLink(link)
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