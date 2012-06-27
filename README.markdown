# Breakpoint #

**Really simple media queries in Sass**

Breakpoint makes writing media queries in Sass super simple. Create a variable using a simplified syntax based on most commonly used media queries, then call it using the `breakpoint` mixin.  Breakpoint handles all of the heavy lifting, from writing the media query itself, to handling cross-browser compatibility issues, so you can focus on what's important: making sure your website looks its best.

Breakpoint makes the following assumptions:

* All queries are assumed to be for all media types. This can be overwritten by specifying the media you'd like to query against as the second parameter in the breakpoint mixin.
* A single value query is assumed to be against the `min-width` feature. This can be overwritten by adding the feature you'd like to query against or by changing the provided default variable.
* A two value query is assumed to be against the `min-width`/`max-width` feature pair. This can be overwritten by adding the feature you'd like to query against or by changing the provided default variable.
* Unprefixed `device-pixel-ratio` queries are transformed into the standard `resolution` breakpoint based on the [W3C recommendation for how to do so](http://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/). This can be overwritten by passing in prefixed the needed prefixed feature.

If you'd prefer to use string names to identify your queries as opposed to variables, check out [Respond-To](https://github.com/snugug/respond-to); a string based naming API for Breakpoint.

## Requirements

Breakpoint is a Compass extension, so make sure you have [Sass and Compass Installed](http://compass-style.org/install/) in order to use its awesomeness!

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

### Usage


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


## Using Breakpoint

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

@media (resolution: 192dpi) {
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


## License

Licensed under MIT/GPL.

GPL license:
http://www.gnu.org/licenses/gpl.html

MIT license:
http://www.opensource.org/licenses/mit-license.php
