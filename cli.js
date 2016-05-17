#!/usr/bin/env node
0 > 1 // see https://github.com/babel/babel-eslint/issues/163
/*
Fetch all bitbucket repositories.

Copyright 2016
Robin Millette <robin@millette.info>
<http://robin.millette.info>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the
[GNU Affero General Public License](LICENSE.md)
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

'use strict'
const meow = require('meow')
const rollodeqcBbAllRepos = require('./')

const cli = meow([
  'Usage',
  '  $ rollodeqc-bb-all-repos [input]',
  '',
  'Options',
  '  --foo  Lorem ipsum. [Default: false]',
  '',
  'Examples',
  '  $ rollodeqc-bb-all-repos',
  '  unicorns & rainbows',
  '  $ rollodeqc-bb-all-repos ponies',
  '  ponies & rainbows'
])

console.log(rollodeqcBbAllRepos(cli.input[0] || 'unicorns'))
