# Breakpoint #

**Really simple media queries in Sass**


## Setup

```sass
@import "breakpoint"

// create $breakpoint variables like so
// assume $breakpoint-default-feature if only a number
$breakpoint1: 500px
$breakpoint2: 30em
// set min-width/max-width if both values are numbers
$breakpoint3: 500px 700px
// set min/max of feature if there are two numbers and a feature
$breakpoint4: 300px 700px height
// if one value is a string, assume a feature/value pair
$breakpoint5: min-width 700px
$breakpoint6: max-width 700px
// for multidimensional lists, assume each item is a feature value pair
$breakpoint7: max-width 700px, orientation portrait
// handle one-sided features (ie. monochrome)
$breakpoint8: max-width 700px, orientation portrait, monochrome
$breakpoint9: monochrome
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
.tgif {
 @include breakpoint($breakpoint4) {
   content: 'tgif';
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

@media screen and (min-height: 300px) and (max-height: 700px) {
  .tgif {
    content: "tgif";
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
```

### Installation

  0. [Install Sass and Compass](http://compass-style.org/install/), if you haven't already.
  1. **Terminal**: `gem install breakpoint`
  2. Add `require 'breakpoint'` in Compass's config.rb file




## Requirements

- [Sass](http://sass-lang.com/)
- [Compass](http://compass-style.org/)




## License

Licensed under MIT/GPL.

GPL license:
http://www.gnu.org/licenses/gpl.html

MIT license:
http://www.opensource.org/licenses/mit-license.php

