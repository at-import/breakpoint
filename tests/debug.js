const sass = require('sass');

const f = './tests/36_resolution_transform.scss';

const {css} = sass.compile(f);

console.log(css);