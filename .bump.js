'use strict';

var path = require('path'),
    fs = require('fs'),
    semver = require('semver'),
    exec = require('child_process').execSync,
    args = require('yargs').argv;

var pkg = require('./package.json'),
    ruby = fs.readFileSync('./lib/breakpoint.rb').toString();

var rubyString,
    date = new Date().toISOString();

var version = pkg.version;

if (exec('git status --porcelain').toString() !== '') {
  console.error('Working dirty. Please commit before trying again');
  process.exit(1);
}

version = {
  major: semver.major(version),
  minor: semver.minor(version),
  patch: semver.patch(version)
};

if (args.major) {
  version = `${version.major + 1}.0.0`;
}
else if (args.minor) {
  version = `${version.major}.${version.minor + 1}.0`;
}
else if (args.patch) {
  version = `${version.major}.${version.minor}.${version.patch + 1}`;
}
else {
  version = `${version.major}.${version.minor}.${version.patch}`;
}

date = date.substring(0, date.indexOf('T'));

rubyString = `module Breakpoint
  VERSION = "${version}"
  DATE = "${date}"
end`;

ruby = ruby.substring(0, ruby.indexOf('module Breakpoint')) + rubyString;

pkg.version = version;

fs.writeFileSync('./lib/breakpoint.rb', ruby + '\n');
fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2) + '\n');

exec(`git commit -am "Release v${version}"`);
exec(`git tag v${version}`);
