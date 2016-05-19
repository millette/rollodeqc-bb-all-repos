# rollodeqc-bb-all-repos
[![Build Status](https://travis-ci.org/millette/rollodeqc-bb-all-repos.svg?branch=master)](https://travis-ci.org/millette/rollodeqc-bb-all-repos)
[![Coverage Status](https://coveralls.io/repos/github/millette/rollodeqc-bb-all-repos/badge.svg?branch=master)](https://coveralls.io/github/millette/rollodeqc-bb-all-repos?branch=master)
[![Dependency Status](https://gemnasium.com/badges/github.com/millette/rollodeqc-bb-all-repos.svg)](https://gemnasium.com/github.com/millette/rollodeqc-bb-all-repos)
> Fetch all bitbucket repositories.

## NOTE
Well, the user location field is gone. So there. Kinda pointless now for my use case, sorry!

*The project is hence **SUSPENDED***.

## Install
```
$ npm install --save rollodeqc-bb-all-repos
```

## Usage
```js
const rollodeqcBbAllRepos = require('rollodeqc-bb-all-repos')

rollodeqcBbAllRepos('unicorns')
//=> 'unicorns & rainbows'
```

## API
### rollodeqcBbAllRepos(input, [options])
#### input
Type: `string`

Lorem ipsum.

#### options
##### foo
Type: `boolean`<br>
Default: `false`

Lorem ipsum.

## CLI
```
$ npm install --global rollodeqc-bb-all-repos
```

```
$ rollodeqc-bb-all-repos --help

  Usage
    rollodeqc-bb-all-repos [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ rollodeqc-bb-all-repos
    unicorns & rainbows
    $ rollodeqc-bb-all-repos ponies
    ponies & rainbows
```


## License
AGPL-v3 © [Robin Millette](http://robin.millette.info)
