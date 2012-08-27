# Breakpoint #

**Really Simple Media Queries with Sass**

Breakpoint makes writing media queries in Sass super simple. Create a variable using a simplified syntax based on most commonly used media queries, then call it using the `breakpoint` mixin.  Breakpoint handles all of the heavy lifting, from writing the media query itself, to handling cross-browser compatibility issues, so you can focus on what's important: making sure your website looks its best.

Breakpoint makes the following assumptions:

* All queries are assumed to be for all media types. This can be overwritten by specifying the media you'd like to query against as the second parameter in the breakpoint mixin.
* A single value query is assumed to be against the `min-width` feature. This can be overwritten by adding the feature you'd like to query against or by changing the provided default variable.
* A two value query is assumed to be against the `min-width`/`max-width` feature pair. This can be overwritten by adding the feature you'd like to query against or by changing the provided default variable.

Breakpoint also allows you to get the [context of your media queries](https://github.com/canarymason/breakpoint#media-query-context) from your code, allowing you to write dynamic mixins based on their media query context.

If you'd prefer the semantic awesomeness of string names to identify your queries as opposed to variables, or want to dynamically generate media queries, check out [Respond-To](https://github.com/snugug/respond-to); a string based naming API for Breakpoint.

**It is important to note** that due to limitations within the Sass language itself, which themselve stem from some potentially unexpected cascading from doing so, Breakpoint is unable to concat like media queries into a single media query. This means they will be spread out throughout your CSS. This is unfortunate, yes, but currently unavoiadable. That being said, once [Sass Issue #241: Seperate Media/Browser Specific Markup to Separate Style Sheet](https://github.com/nex3/sass/issues/241) hits, be sure we're going to take full advantage of it.

## Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Setup](#setup)
    * [Breakpoint Options](#breakpoint-options)
    * [Using Breakpoint](#using-breakpoint)
4. [Media Query Context](#media-query-context)
5. [No Query Fallback](#no-query-fallback)
    * [Wrapping Selector, Same Stylesheet](#wrapping-selector-same-stylesheet)
    * [No Wrapping Selector, Separate Stylesheet](#no-wrapping-selector-separate-stylesheet)
    * [Wrapping Selector, Separate Stylesheet](#wrapping-selector-separate-stylesheet)

## Requirements

Breakpoint is a Compass extension, so make sure you have [Sass and Compass Installed](http://compass-style.org/install/) in order to use its awesomeness!

Breakpoint also requires Sass 3.2. Breakpoint should install Sass 3.2 for you when you install it, but in case you are getting errors, open up your terminal and type the following in:

`gem install sass`

This will install Sass 3.2. If you are compiling with CodeKit, [Chris Coyier has an awesome writeup](http://css-tricks.com/media-queries-sass-3-2-and-codekit/) on how to get CodeKit playing nice with Sass 3.2, at least until it is updated to 3.2.

## Installation

`gem install breakpoint`

#### If creating a new project
`compass create <my_project> -r breakpoint`

#### If adding to existing project, in config.rb
`require 'breakpoint`

#### Import the breakpoint partial at the top of your working file
`@import "breakpoint";`

## Setup

### Breakpoint Options

Breakpoint provides a few default options that you can change.

* `$breakpoint-default-media` - Defaults to 'all'. If you do not pass a media type into the breakpoint mixin, this is the media type that will be used.
* `$breakpoint-default-feature` - Defaults to 'min-width'. If you write a breakpoint with only a number, this is the feature that is used.
* `$breakpoint-default-pair` - Defaults to 'width'. If you write a breakpoint with two numbers but do not specify the feature, this is the feature that is used.
* `$breakpoint-to-ems` - Defaults to 'false'. If set to true, all pt/px/percent numbers will be converted to em units for better, more accessable media queries.
* `$breakpoint-prefixes` - Defines the prefixes to write for prefixed media features. Defaults to `'webkit' 'moz'`.
* `$breakpoint-prefixed-queries` - Defines what queries should be prefixed. Defaults to `'device-pixel-ratio' 'min-device-pixel-ratio' 'max-device-pixel-ratio'`.

PLEASE NOTE! If you're a savvy reader, you'll have noticed that we've not included `-o-device-pixel-ratio` as a prefixed option, and we would encourage you not to either. Opera has decided that [their implementation should be written as a fraction, not as a decimal](http://dev.opera.com/articles/view/an-introduction-to-meta-viewport-and-viewport/#device-pixel-ratio), and we are currently not prepared to support automatic conversion of decimals to fractions. This leaves us in the position of either supporting only fractions for unprefixed `device-pixel-ratio`, which is counter to the way the two largest browsers support the query, or suggesting that if you want to use `-o-device-pixel-ratio` that you write a separate media query for it, and we've chosen the later.

## Using Breakpoint

First, we set up our breakpoint variables.

```scss
// create $breakpoint variables like so
// assume min-width (by default) if only a number
$breakpoint-medium-width: 500px;
$breakpoint-medium-width-em: 30em;
// set min-width/max-width if both values are numbers
$breakpoint-medium-not-wide: 500px 700px;
// set min/max of feature if there are two numbers
$breakpoint-medium-height: 300px 700px 'height';
// if one value is a string, assume a feature/value pair
$breakpoint-kind-of-wide: min-width 700px;
$breakpoint-not-too-wide: max-width 700px;
// for multidimensional lists, assume each item is a feature value pair
$breakpoint-wide-portrait: max-width 700px, orientation portrait;
// handle one-sided features (ie. monochrome)
$breakpoint-wide-portrait-mono: max-width 700px, orientation portrait, monochrome;
$breakpoint-mono: monochrome;
$breakpoint-hi-rez: 2 device-pixel-ratio;
```

Call the mixin and pass one of your breakpoint variables. You can also call it with a la carte arguments.

```scss
.foo {
  @include breakpoint($breakpoint-medium-width) {
    content: 'medium widths';
  }
}
.bar {
  @include breakpoint($breakpoint-medium-width-em) {
    content: 'medium widths measured in ems';
  }
}
.baz {
  @include breakpoint($breakpoint-medium-not-wide) {
    content: 'medium, but not too wide';
  }
}
.tgif {
 @include breakpoint($breakpoint-medium-height) {
   content: 'medium heights';
 }
}
.omg {
  @include breakpoint($breakpoint-kind-of-wide) {
    content: 'kind of wide';
  }
}
.wtf {
  @include breakpoint($breakpoint-not-too-wide) {
    content: 'not too wide';
  }
}
.bbq {
  @include breakpoint($breakpoint-wide-portrait) {
    content: 'wide, portrait';
  }
}
.zztop {
  @include breakpoint($breakpoint-wide-portrait-mono) {
    content: 'wide, portrait, monochrome';
  }
}
.csny {
  @include breakpoint($breakpoint-mono) {
    content: 'monochrome';
  }
}
.elp {
  @include breakpoint($breakpoint-mono, print) {
    content: 'monochrome, print';
  }
}
.omgdpr {
 @include breakpoint($breakpoint-hi-rez) {
  content: 'hi resolutions';
 }
}

// You can use breakpoint without variables too.
.rhcp {
  @include breakpoint(30em 40em) {
    content: 'between 30 and 40ems';
  }
}
```

Example generated CSS

```css
@media (min-width: 500px) {
  .foo {
    content: 'medium widths';
  }
}

@media (min-width: 30em) {
  .bar {
    content: 'medium widths measured in ems';
  }
}

@media (min-width: 500px) and (max-width: 700px) {
  .baz {
    content: 'medium, but not too wide';
  }
}

@media (min-height: 300px) and (max-height: 700px) {
  .tgif {
    content: 'medium heights';
  }
}

@media (min-width: 700px) {
  .omg {
    content: 'kind of wide';
  }
}

@media (max-width: 700px) {
  .wtf {
    content: 'not too wide';
  }
}

@media (max-width: 700px) and (orientation: portrait) {
  .bbq {
    content: 'wide, portrait';
  }
}

@media (max-width: 700px) and (orientation: portrait) and (monochrome) {
  .zztop {
    content: 'wide, portrait, monochrome';
  }
}

@media (monochrome) {
  .csny {
    content: 'monochrome';
  }
}

@media print and (monochrome) {
  .elp {
    content: 'monochrome, print';
  }
}

@media (-webkit-device-pixel-ratio: 2) {
  .omgdpr {
    content: 'hi resolutions';
  }
}

@media (-moz-device-pixel-ratio: 2) {
  .omgdpr {
    content: 'hi resolutions';
  }
}

@media (min-width: 30em) and (max-width: 40em) {
  .rhcp {
    content: 'between 30 and 40ems';
  }
}
```

With `$breakpoint-to-ems: true;`
```scss
@media (min-width: 31.25em) {
  .foo {
    content: 'medium widths';
  }
}

@media (min-width: 30em) {
  .bar {
    content: 'medium widths measured in ems';
  }
}

@media (min-width: 31.25em) and (max-width: 43.75em) {
  .baz {
    content: 'medium, but not too wide';
  }
}

@media (min-height: 18.75em) and (max-height: 43.75em) {
  .tgif {
    content: 'medium heights';
  }
}

@media (min-width: 43.75em) {
  .omg {
    content: 'kind of wide';
  }
}

@media (max-width: 43.75em) {
  .wtf {
    content: 'not too wide';
  }
}

@media (max-width: 43.75em) and (orientation: portrait) {
  .bbq {
    content: 'wide, portrait';
  }
}

@media (max-width: 43.75em) and (orientation: portrait) and (monochrome) {
  .zztop {
    content: 'wide, portrait, monochrome';
  }
}

@media print and (monochrome) {
  .elp {
    content: 'monochrome, print';
  }
}

@media (min-width: 30em) and (max-width: 40em) {
  .rhcp {
    content: 'between 30 and 40ems';
  }
}
```

## Media Query Context

Ever wanted to get the context of a media query from within a mixin or function? Well we have, so we've made that possible! Simply call the `breakpoint-get-context($feature)` function which will either return the contextual value for that feature (`min-width`, `max-width`, etc…) or `false`. You can then do all the awesomeness that you've ever wanted to do with that information.

Caviats with Media Query context:

* If you have `$breakpoint-to-ems` set to true, you will get returns in base ems. You can run non-em based values through `breakpoint-to-base-em($value)` to convert them to base ems.
* If you are testing for a prefixed feature (such as `device-pixel-ratio`), you need to test for the prefixed value (`-webkit-device-pixel-ratio`, `min--moz-device-pixel-ratio`, etc…).

## No Query Fallback

Breakpoint provides a way to generate fallback CSS for if you would like the CSS to apply even if media queries aren't available. There are three methidologies we discovered cover most, if not all, of the stylistic options a user could have in a system like this: a wrapping selector within the same stylesheet, a seperate stylesheet with no wrapping selector, and a seperate stylesheet with a wrapping selector. For both of these, bare in mind that Sass cannot create separate stylesheets automatically ([yet](https://github.com/nex3/sass/issues/241)), so you're going to need to do it by hand, but the tools we've provided are very powerful, so we think you'll like.

There are now two new breakpoint flags to set that control no query support, `$breakpoint-no-queries` for specifying that only no query output should be output by Breakpoint and `$breakpoint-no-query-wrappers` for specifying that you want no query wrappers to be printed. Both of the new flags, `$breakpoint-no-queries` and `$breakpoint-no-query-wrappers` default to `false`, toggling them to `true` activates them. For the purposes of clarity in the following code samples, I'm including both flags even though the `false` flags are not explicitly needed. When passing in a wrapper, you must write the whole wrapper and may include a compound wrapper, *i.e.* `'.no-mqs'` or `'#print'` or `'.high-dpi.no-mqs'`. Variables may also be passed in, but they still require the whole wrapper.

### Wrapping Selector, Same Stylesheet
```scss
// style.scss
$breakpoint-no-queries: false;
$breakpoint-no-query-wrappers: true;

#foo {
  background: red;
  @include breakpoint(567px, $no-query: '.no-mqs') {
    background: green;
  }
}
```
```css
/* style.css */
#foo {
  background: red;
}

.no-mqs #foo {
  background: green;
}

@media (min-width: 567px) {
  #foo {
    background: green;
  }
}
```

### No Wrapping Selector, Separate Stylesheet
```scss
// _layout.scss
#foo {
  background: red;
  @include breakpoint(567px, $no-query: true) {
    background: green;
  }
}
```
```scss
// style.scss
$breakpoint-no-queries: false;
$breakpoint-no-query-wrappers: false;

@import 'layout';
```
```scss
// no-mq.scss
$breakpoint-no-queries: true;
$breakpoint-no-query-wrappers: false;

@import 'layout';
```
```css
/* style.css */
#foo {
  background: red;
}

@media (min-width: 567px) {
  #foo {
    background: green;
  }
}
```
```css
/* no-mq.css */
#foo {
  background: red;
  background: green;
}
```

### Wrapping Selector, Separate Stylesheet
```scss
// _layout.scss
#foo {
  background: red;
  @include breakpoint(567px, $no-query: '.no-mq') {
    background: green;
  }
}
```
```scss
// style.scss
$breakpoint-no-queries: false;
$breakpoint-no-query-wrappers: false;

@import 'layout';
```
```scss
// no-mq.scss
$breakpoint-no-queries: true;
$breakpoint-no-query-wrappers: true;

@import 'layout';
```
```css
/* style.css */
#foo {
  background: red;
}

@media (min-width: 567px) {
  #foo {
    background: green;
  }
}
```
```css
/* no-mq.css */
.no-mq #foo {
  background: green;
}
```

## License

Licensed under MIT/GPL.

GPL2 license:
http://www.gnu.org/licenses/gpl-2.0.html

MIT license:
http://www.opensource.org/licenses/mit-license.php
