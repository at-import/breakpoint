const sass = require('sass');
const {readFileSync} = require('fs');
const path = require('path');
const glob = require('glob');
const test = require('node:test');

const tests = glob.sync(path.join(__dirname, './tests/01_pixel.scss')).filter(file => !path.basename(file).startsWith('_'));

for (const t of tests) {
  const name = path.basename(t).replace('.scss', '');
  const expected = readFileSync(`./tests/controls/${name}.css`, 'utf-8');


  test(name, tx => {
    const {css} = sass.compile(t);

    tx.assert.strictEqual(css, expected);
  });
}