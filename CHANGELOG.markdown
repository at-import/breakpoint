# Changelog

## 0.2 - May 24, 2012
* Converted from Sass to SCSS
* Converted README examples from Sass to SCSS
* Added ability to do min/max easily with any valid feature
* Added prefixing for "device-pixel-ratio" feature for the three implementations (-webkit, -moz, -o) as well as a standard version for future friendliness
  * -moz's min/max is different than -webkit or -o, so prefixed differently
  * Opera is strange and needs its DPR in a ratio instead of a floating point number, so requires the fraction rubygem and has a numerator/denominator function to accommodate.
* Added ability to have single feature/value input be either have feature first or second

## 0.1 - May 22, 2012
* extract breakpoint from ssurvival kit to this gem
