'use strict';

var exec = require('child_process').execSync,
    version = require('./package.json').version;

var commands = [
  'gem build breakpoint.gemspec',
  `gem push breakpoint-${version}.gem`,
  `rm breakpoint-${version}.gem`
];

commands.forEach(command => {
  try {
    exec(command);
  }
  catch (e) {
    console.error(e.message);
    process.exit(1);
  }
});

process.exit();
