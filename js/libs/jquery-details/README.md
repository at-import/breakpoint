# `<details>`/`<summary>` jQuery plugin

This plugin polyfills `<details>`/`<summary>` HTML elements and adds [the appropriate ARIA annotations](http://mathiasbynens.be/notes/html5-details-jquery#comment-58) for optimal accessibility. [More information can be found in my blog post on the subject.](http://mathiasbynens.be/notes/html5-details-jquery)

## Demo & Examples

<http://mathiasbynens.be/demo/html5-details-jquery>

## Example Usage

In its simplest form:

```js
// Polyfill a given set of elements
$('details').details();
```

The plugin will automatically detect browser support and act accordingly. If other parts of your code need to know whether `<details>`/`<summary>` are supported or not, use `$.fn.details.support`:

```js
// Detect whether `<details>`/`<summary>` are natively supported
console.log($.fn.details.support ? 'Native support' : 'No native support');
// Conditionally add a classname to the `html` element, based on native support
$('html').addClass($.fn.details.support ? 'details' : 'no-details');
```

The plugin will provide `open.details` and `close.details` events for you to use:

```js
$('details').on({
 'open.details': function() {
    console.log('opened');
  },
  'close.details': function() {
    console.log('closed');
  }
});
```

Any handlers bound to these events will fire even in browsers that natively support `<details>`.

Since both events live under the `details` namespace, you can easily unbind all handlers that are specific to this plugin:

```js
$('details').off('.details');
```

## Notes

The plugin doesn’t require you to add any CSS to your document. It will add a `class="open"` to any open `<details>` elements though (in addition to the `open` attribute), so you can very easily target these using CSS if you want.

This plugin includes my [noSelect jQuery plugin](http://mths.be/noselect).

This plugin automatically feature tests for native `<details>`/`<summary>` support and only enables the fallback when it’s necessary. You don’t have to write any feature tests yourself.

This plugin requires jQuery 1.7+. For a version that works with older jQueries, [see v0.0.1](https://github.com/mathiasbynens/jquery-details/blob/0.0.1/jquery.details.js).

This fallback works in all A-grade browsers, including IE6. It will only be executed if the `<details>` element is not natively supported in the browser. If it isn’t, and JavaScript is disabled, all elements will still be visible to the user.

While the plugin has a certain level of support for `<details>` elements without a `<summary>`, it should be noted that omitting the `<summary>` element results in invalid HTML, and prevents the custom `open.details`/`close.details` events from firing in browsers that natively support `<details>`. Don’t do this!

## License

This plugin is dual licensed under the MIT and GPL licenses, just like jQuery itself.

_– [Mathias](http://mathiasbynens.be/)_