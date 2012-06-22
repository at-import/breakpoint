# Changelog

## 1.0 - June 22, 2012
* Refactor of the underlying logic to make everything work better and make the world a happy place.
* Added default options for Default Feature, Default Media, and Default Feature Pair.
* Changed default media from "Screen" to "All".
* Added ability to have all px/pt/percentage media queries transformed into em based media queries.

## 0.3 - June 18, 2012
* Rewrote 'device-pixel-ratio' conversions to change from prefixed nightmarish hell to Resolution standard based on the [W3C Unprefixing -webkit-device-pixel-ratio article](http://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/)
* Large README update covering feature set, installation, assumptions, and more.

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
