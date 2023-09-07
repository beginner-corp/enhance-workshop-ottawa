import data from '@begin/data'
import { validator } from '@begin/validator'
import { Link } from './schemas/link.mjs'

const deleteLink = async function (key) {
  await data.destroy({ table: 'links', key })
  return { key }
}

const upsertLink = async function (link) {
  return data.set({ table: 'links', ...link })
}

const getLink = async function (key) {
  return data.get({ table: 'links', key })
}

const getLinks = async function () {
  const databasePageResults = await data.page({
    table: 'links',
    limit: 25
  })

  let links = []
  for await (let databasePageResult of databasePageResults) {
    for (let link of databasePageResult) {
      delete link.table
      links.push(link)
    }
  }

  return links
}

const validate = {
  shared (req) {
    return validator(req, Link)
  },
  async create (req) {
    let { valid, problems, data } = validate.shared(req)
    if (req.body.key) {
      problems['key'] = { errors: '<p>should not be included on a create</p>' }
    }
    // Insert your custom validation here
    return !valid ? { problems, link: data } : { link: data }
  },
  async update (req) {
    let { valid, problems, data } = validate.shared(req)
    // Insert your custom validation here
    return !valid ? { problems, link: data } : { link: data }
  }
}

export {
  deleteLink,
  getLink,
  getLinks,
  upsertLink,
  validate
}