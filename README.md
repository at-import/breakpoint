# Breakpoint ![npm version](https://badge.fury.io/js/breakpoint-sass.svg) ![downloads per week](https://img.shields.io/npm/dw/breakpoint-sass) ![test status](https://github.com/at-import/breakpoint/actions/workflows/test.yml/badge.svg)

**Really Simple Media Queries with Sass**

Breakpoint makes writing media queries in Sass super simple. Create a variable using a simplified syntax based on most commonly used media queries, then call it using the `breakpoint` mixin. Breakpoint handles all of the heavy lifting, from writing the media query itself, to handling cross-browser compatibility issues, so you can focus on what's important: making sure your website looks its best.

If you'd prefer the semantic awesomeness of string names to identify your queries as opposed to variables, or want to dynamically generate media queries, you can use the `respond-to` mixin instead.

## Migrating from Breakpoint 3.x to Breakpoint 4.x

Breakpoint 4.x requires Sass 1.83 or greater and is now written to make use of Sass's [module system](https://sass-lang.com/documentation/at-rules/use/). This, unfortunately, requires some breaking changes within Breakpoint. Here's how to migrate:

### Importing and basic usage

Because Breakpoint now is compatible with Sass's module system, you should use the `@use` syntax for importing it. It's set up to be compatible with the [Node.js Package Importer](https://sass-lang.com/documentation/at-rules/use/#node-js-package-importer), so you can use a `pkg:` URL with it when importing.

```scss
@use 'pkg:breakpoint';
```

This will give you all of Breakpoint's mixins (including `respond-to`) under the `breakpoint` namespace, so `@include breakpoint.breakpoint` is the equivalent of `@include breakpoint` from 3.x and below. Migrating to this new syntax may be frustrating for modules that use breakpoint across their codebase, or write it often. To help with this, Breakpoint 4.x includes optional mixin names that can be used with Sass modules' [namespace](https://sass-lang.com/documentation/at-rules/use/#choosing-a-namespace) option:

```
// Use one of these
@use 'pkg:breakpoint' as break; // @include break.point
@use 'pkg:breakpoint' as m; // @include m.q
@use 'pkg:breakpoint' as respond; // @include respond.to
```

### Settings

Settings are now passed into Breakpoint when you first `@use` it; that means you can't change settings on-the-fly like you could with previous versions. Changing settings can be done in one of two ways, either by passing in a variable for the individual settings you want to change, or by passing in a `$settings` map:

```scss
// Variables with their default values. Each variable can be individually passed
@use 'pkg:breakpoint' with (
  $default-media: all,
  $default-feature: min-width,
  $default-pair: width,
  $force-all-media-type: false,
  $transform-resolutions: true
);
```

or

```scss
// Variables with their default values
@use 'pkg:breakpoint' with (
  $settings: (
    'default media': all,
    'default feature': min-width,
    'default pair': width,
    'force all media type': false,
    'transform resolutions': true,
  )
);
```

The internals that Breakpoint uses to parse media queries has also been exposed using an `$internals` map that can be passed in. If Breakpoint doesn't support a new media query correctly, you can add support for it yourself here. The default map can be seen in `stylesheets/_breakpoint.scss`; keep in mind you need to pass in the whole map, you can't just pass in a part of it.

**IMPORTANT** Settings can only be set the first time you `@use` the package; you can't override them with subsequent `@use`s, but what you set is reused across subsequent `@use`s.

### Respond-to

Respond-to now comes built-in to Breakpoint, no separate imports required. It lives under the default namespace for the module (`@include breakpoint.respond-to`). To add a breakpoint for respond-to, use the exported `add` mixin `@include breakpoint.add`.

## Contributing to Breakpoint

We love contributors! Yes we do! If you would like to contribute to Breakpoint, please follow the [Contributing Guidelines](https://github.com/at-import/breakpoint/blob/main/CONTRIBUTING.md)

## License

Licensed under MIT

MIT license:
http://www.opensource.org/licenses/mit-license.php
