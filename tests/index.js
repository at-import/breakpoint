const test = require('ava');
const sass = require('sass');
const {readFileSync} = require('fs');
const path = require('path');
const glob = require('glob');
const {pathToFileURL} = require('url');

const tests = glob.sync(path.join(__dirname, './tests/**.scss')).filter(file => !path.basename(file).startsWith('_'));

async function testMacro(t, file) {
  const css = sass.compile(file, {
    importers: [{
      findFileUrl(url) {
        if (url.startsWith('breakpoint')) {
          return new URL(url, pathToFileURL(path.join(process.cwd(), 'stylesheets/')));;
        } else if (url === 'memo' || url.startsWith('sassy-maps')) {
          return new URL(url, pathToFileURL(path.join(process.cwd(), 'node_modules/sassy-maps/sass/')));
        }

        return null;
      }
    }]
  });

  const cssFile = file.replace('.scss', '.css').replace('/tests/tests/', '/tests/controls/');
  const expected = readFileSync(cssFile, 'utf8');
  
  t.is(css.css + '\n', expected);
}

for (const testFile of tests) {
  test(path.basename(testFile).replace(/(\n*)_/, ' ').replace('.scss', '').replace(/_/g, ' ').replace('-', ' - '), testMacro, testFile);
}