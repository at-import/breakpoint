const sass = require('sass');
const { readFileSync } = require('fs');
const path = require('path');
const glob = require('glob');
const test = require('node:test');

const tests = glob.sync(path.join(__dirname, './tests/**.scss')).sort().filter(file => !path.basename(file).startsWith('_'));

for (const t of tests) {
  let name = path.basename(t).replace('.scss', '');
  let skip = false;
  if (name.endsWith('.skip')) {
    skip = true;
    name = name.replace('.skip', '')
  }
  const expected = readFileSync(`./tests/controls/${name}.css`, 'utf-8');


  test(name, { skip }, tx => {
    const { css } = sass.compile(t);

    tx.assert.strictEqual(css, expected);
  });
}