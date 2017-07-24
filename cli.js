#!/usr/bin/env node
'use strict'

const meow = require('meow')
const getGithubLabels = require('./')
const Promise = require('bluebird')
const ghauth = Promise.promisify(require('ghauth'))
const authOptions = {
  configName: 'getGithubLabels',
  note: 'Get GitHub labels from a repository',
  userAgent: 'ghUser',
  scope: []
}

const cli = meow([`
  Usage
    $ get-github-labels [input]

  Options
    -t, --token A token

  Examples
    $ get-github-labels RichardLitt/get-github-labels
    // TODO 
`], {
  alias: {
    t: 'token'
  }
})


if (cli.flags.token) {
  getGithubLabels(cli.input[0], { token: cli.flags.token })
  .then((response) => console.log(response))
  .catch((err) => console.log('Unable to use passed token', err))
} else {
  Promise.try(() => ghauth(authOptions))
  .then((authData) => getGithubLabels(cli.input[0], authData))
  .then((response) => console.log(response))
  .catch((err) => console.log('Unable to use ghAuth', err))
}
