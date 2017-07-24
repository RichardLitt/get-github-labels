'use strict'

const Octokat = require('octokat')
const Promise = require('bluebird')
const isArray = require('is-array')
var octo

module.exports = function (repo, opts) {
  octo = new Octokat({
    token: opts && opts.token || process.env.GITHUB_OGN_TOKEN
  })


  if (typeof repo !== 'string') {
    throw new TypeError('Expected a repoitory in form user/repo')
  }

  return Promise.resolve().then(() => {
    return octo.repos(repo).labels.fetch()
  }).map((label) => {
    return {
      'name': label.name,
      'color': label.color
    }
  })
  .then(function (labels) {
    return labels
  }).catch(function (err) {
    if (err.status === 404) {
      return []
    } else {
      throw ('Could not get GitHub user', err)
    }
  })
}
