# Breakpoint #

**Really simple media queries in Sass**

Breakpoint aims to make writing media queries in Sass super simple. Create a variable using a simplified syntax based on most commonly used media queries, then call it using the `breakpoint` mixin.  Breakpoint handles all of the lifting of writing the media query itself, including cross-browser compatibility issues, so you can focus on what's important: making sure your website looks its best.

Breakpoint makes the following assumptions:

* All queries are assumed to be screen queries. This can be overwritten by specifying the media you'd like to query against as the second parameter in the breakpoint mixin.
* A single value query is assumed to be against the `min-width` feature. This can be overwritten by adding the feature you'd like to query against.
* A two value query is assumed to be against the `min-width`/`max-width` feature pair. This can be overwritten by adding the feature you'd like to query against.
* Unprefixed `device-pixel-ratio` queries are transformed into the standard `resolution` breakpoint based on the [W3C recommendation for how to do so](http://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/). This can be overwritten by passing in prefixed the needed prefixed feature.

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

```scss
// create $breakpoint variables like so
// assume $breakpoint-default-feature if only a number
$breakpoint1: 500px;
$breakpoint2: 30em;
// set min-width/max-width if both values are numbers
$breakpoint3: 500px 700px;
// set min/max of feature if there are two numbers
$breakpoint4: 300px 700px 'height';
// if one value is a string, assume a feature/value pair
$breakpoint5: min-width 700px;
$breakpoint6: max-width 700px;
// for multidimensional lists, assume each item is a feature value pair
$breakpoint7: max-width 700px, orientation portrait;
// handle one-sided features (ie. monochrome)
$breakpoint8: max-width 700px, orientation portrait, monochrome;
$breakpoint9: monochrome;
$breakpoint10: 2 device-pixel-ratio;
```


## Using Breakpoint

Call the mixin and pass one of your breakpoint variables. You can also call it with a la carte arguments.

```scss
.foo {
  @include breakpoint($breakpoint1) {
    content: 'foo';
  }
}
.bar {
  @include breakpoint($breakpoint2) {
    content: 'bar';
  }
}
.baz {
  @include breakpoint($breakpoint3) {
    content: 'baz';
  }
}
.omg {
  @include breakpoint($breakpoint5) {
    content: 'omg';
  }
}
.wtf {
  @include breakpoint($breakpoint6) {
    content: 'wtf';
  }
}
.bbq {
  @include breakpoint($breakpoint7) {
    content: 'bbq';
  }
}
.zztop {
  @include breakpoint($breakpoint8) {
    content: 'zztop';
  }
}
.elp {
  @include breakpoint($breakpoint1, print) {
    content: 'elp';
  }
}
.csny {
  @include breakpoint($breakpoint9) {
    content: 'csny';
  }
}
.rhcp {
  @include breakpoint(30em 40em) {
    content: 'rhcp';
  }
}
.tgif {
 @include breakpoint($breakpoint4) {
   content: 'tgif';
 }
}
.omgdpr {
 @include breakpoint($breakpoint10) {
  content: 'omgdpr';
 }
}
```

Example generated CSS

```css
@media screen and (min-width:  500px) {
  .foo {
    content: "foo";
  }
}

@media screen and (min-width:  30em) {
  .bar {
    content: "bar";
  }
}

@media screen and (min-width:  500px) and (max-width:  700px) {
  .baz {
    content: "baz";
  }
}

@media screen and (min-width:  700px) {
  .omg {
    content: "omg";
  }
}

@media screen and (max-width:  700px) {
  .wtf {
    content: "wtf";
  }
}

@media screen and (max-width:  700px) and (orientation:  portrait) {
  .bbq {
    content: "bbq";
  }
}

@media screen and (max-width:  700px) and (orientation:  portrait) and (monochrome) {
  .zztop {
    content: "zztop";
  }
}

@media print and (min-width:  500px) {
  .elp {
    content: "elp";
  }
}

@media screen and (monochrome) {
  .csny {
    content: "csny";
  }
}

@media screen and (min-width:  30em) and (max-width:  40em) {
  .rhcp {
    content: "rhcp";
  }
}

@media screen and (min-height: 300px) and (max-height: 700px) {
  .tgif {
    content: "tgif";
  }
}

@media screen and (resolution: 192dpi) {
  .omgdpr {
    content: "omgdpr";
  }
}
```

## License

Licensed under MIT/GPL.

GPL license:
http://www.gnu.org/licenses/gpl.html

MIT license:
http://www.opensource.org/licenses/mit-license.php