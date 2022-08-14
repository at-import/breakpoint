# Breakpoint ![npm version](https://badge.fury.io/js/breakpoint-sass.svg) ![downloads per week](https://img.shields.io/npm/dw/breakpoint-sass) ![test status](https://github.com/at-import/breakpoint/actions/workflows/test.yml/badge.svg)



**Really Simple Media Queries with Sass**

Breakpoint makes writing media queries in Sass super simple. Create a variable using a simplified syntax based on most commonly used media queries, then call it using the `breakpoint` mixin.  Breakpoint handles all of the heavy lifting, from writing the media query itself, to handling cross-browser compatibility issues, so you can focus on what's important: making sure your website looks its best.

Breakpoint also allows you to get the [context of your media queries](https://github.com/at-import/breakpoint/wiki/Breakpoint-Context) from your code, allowing you to write dynamic mixins based on their media query context.

If you'd prefer the semantic awesomeness of string names to identify your queries as opposed to variables, or want to dynamically generate media queries, the [Respond-To](https://github.com/at-import/breakpoint/wiki/Respond-To) syntax is now included in Breakpoint core!

**It is important to note** that due to limitations within the Sass language itself, which themselves stem from some potentially unexpected cascading from doing so, Breakpoint is unable to concat like media queries into a single media query. This means they will be spread out throughout your CSS. This is unfortunate, yes, but currently unavoidable. That being said, once [Sass Issue #241: Seperate Media/Browser Specific Markup to Separate Style Sheet](https://github.com/nex3/sass/issues/241) hits, be sure we're going to take full advantage of it.


## Full documentation is available on the [Breakpoint Wiki](https://github.com/at-import/breakpoint/wiki)

## Getting Help with Breakpoint

* For help with Breakpoint, please ask a question on [Stack Overflow](http://stackoverflow.com/questions/ask) tagged with "breakpoint-sass".
* To file an issue with Breakpoint, be it a feature request or a bug report, please use our [Issue Queue](https://github.com/at-import/breakpoint/issues).
* **Each Separate Bug Report or Feature Request Must Have Its Own Issue**
* Search in both active issues and closed issues before filing your own. If one already exists, please respond there.
* If you are in IRC, the maintainers and many fellow users tend to hang out in the #sass and #compass rooms on irc.freenode.net. Asking in there may get you a quick answer to your question, but we still encourage you to file your inquiry in the appropriate place above to 

## Contributing to Breakpoint

We love contributors! Yes we do! If you would like to contribute to Breakpoint, please follow the [Contributing Guidelines](https://github.com/at-import/breakpoint/blob/main/CONTRIBUTING.md)

## License

Licensed under MIT

MIT license:
http://www.opensource.org/licenses/mit-license.php
