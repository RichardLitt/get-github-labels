# get-github-labels [![Build Status](https://travis-ci.org/RichardLitt/get-github-labels.svg?branch=master)](https://travis-ci.org/RichardLitt/get-github-labels)

> Get GitHub labels from a repository


## Install

```
$ npm install --save get-github-labels
```

You also need to get a GitHub application token: https://github.com/settings/tokens. Provide it in the CLI or set it as `$GITHUB_OGN_TOKEN` somewhere in your bash_profile.

## Usage

```js
const getGithubLabels = require('get-github-labels');

getGithubUser('RichardLitt/get-github-labels');
//=> [{ name: 'bug', color: 'fc2929' }, ... ]
```


## API

### getGithubLabels(input)

#### input

Type: `string`

The repository you want label objects for.

## CLI

```
$ npm install --global get-github-labels
```

```
$ get-github-labels --help

  Usage
    get-github-labels [input]

  Examples
    $ get-github-labels RichardLitt/get-github-labels
    [{ name: 'bug', color: 'fc2929' }, ... ]
```

## License

MIT © [Richard Littauer](http://burntfen.com)
