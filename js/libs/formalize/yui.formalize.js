//
// Note: This file depends on the YUI library.
//

// Module pattern:
// http://yuiblog.com/blog/2007/06/12/module-pattern/
var FORMALIZE = (function(window, document, undefined) {
	// Private constants.
	var PLACEHOLDER_SUPPORTED = 'placeholder' in document.createElement('input');
	var AUTOFOCUS_SUPPORTED = 'autofocus' in document.createElement('input');
	var WEBKIT = 'webkitAppearance' in document.createElement('select').style;
	var IE6 = parseInt(Y.UA.ie, 10) === 6;
	var IE7 = parseInt(Y.UA.ie, 10) === 7;

	// Expose innards of FORMALIZE.
	return {
		// FORMALIZE.go
		go: function() {
			for (var i in FORMALIZE.init) {
				FORMALIZE.init[i]();
			}
		},
		// FORMALIZE.init
		init: {
			// FORMALIZE.init.detect_webkit
			detect_webkit: function() {
				if (!WEBKIT) {
					return;
				}

				// Tweaks for Safari + Chrome.
				Y.one('html').addClass('is_webkit');
			},
			// FORMALIZE.init.full_input_size
			full_input_size: function() {
				if (!IE7 || !Y.all('textarea, input.input_full')) {
					return;
				}

				// This fixes width: 100% on <textarea> and class="input_full".
				// It ensures that form elements don't go wider than container.
				Y.all('textarea, input.input_full').each(function(el) {
          var wrapper = Y.Node.create('<span class="input_full_wrap"></span>');
					wrapper.append(el.replace(wrapper));
				});
			},
			// FORMALIZE.init.ie6_skin_inputs
			ie6_skin_inputs: function() {
				// Test for Internet Explorer 6.
				if (!IE6 || !Y.all('input, select, textarea')) {
					// Exit if the browser is not IE6,
					// or if no form elements exist.
					return;
				}

				// For <input type="submit" />, etc.
				var button_regex = /button|submit|reset/;

				// For <input type="text" />, etc.
				var type_regex = /date|datetime|datetime-local|email|month|number|password|range|search|tel|text|time|url|week/;

				Y.all('input').each(function(el) {
					// Is it a button?
					if (el.getAttribute('type').match(button_regex)) {
						el.addClass('ie6_button');

						/* Is it disabled? */
						if (el.disabled) {
							el.addClass('ie6_button_disabled');
						}
					}
					// Or is it a textual input?
					else if (el.getAttribute('type').match(type_regex)) {
						el.addClass('ie6_input');

						/* Is it disabled? */
						if (el.disabled) {
							el.addClass('ie6_input_disabled');
						}
					}
				});

				Y.all('textarea, select').each(function(el) {
					/* Is it disabled? */
					if (el.disabled) {
						el.addClass('ie6_input_disabled');
					}
				});
			},
			// FORMALIZE.init.autofocus
			autofocus: function() {
				if (AUTOFOCUS_SUPPORTED || !Y.one('[autofocus]')) {
					return;
				}

				Y.one('[autofocus]').focus();
			},
			// FORMALIZE.init.placeholder
			placeholder: function() {
				if (PLACEHOLDER_SUPPORTED || !Y.one('[placeholder]')) {
					// Exit if placeholder is supported natively,
					// or if page does not have any placeholder.
					return;
				}

				FORMALIZE.misc.add_placeholder();

				Y.all('[placeholder]').each(function(el) {
					var text = el.getAttribute('placeholder');
					var form = el.ancestor('form');

					function add_placeholder() {
						if (!el.get('value') || el.get('value') === text) {
							el.set('value', text).addClass('placeholder_text');
						}
					}

					el.on('focus', function() {
						if (el.get('value') === text) {
							el.set('value', '').removeClass('placeholder_text');
						}
					});

					el.on('blur', function() {
						FORMALIZE.misc.add_placeholder();
					});

					// Prevent <form> from accidentally
					// submitting the placeholder text.
					form.on('submit', function() {
						if (el.get('value') === text) {
							el.set('value', '').removeClass('placeholder_text');
						}
					});

					form.on('reset', function() {
						setTimeout(FORMALIZE.misc.add_placeholder, 50);
					});
				});
			}
		},
		// FORMALIZE.misc
		misc: {
			// FORMALIZE.misc.add_placeholder
			add_placeholder: function() {
				if (PLACEHOLDER_SUPPORTED || !Y.one('[placeholder]')) {
					// Exit if placeholder is supported natively,
					// or if page does not have any placeholder.
					return;
				}

				Y.all('[placeholder]').each(function(el) {
				  var text = el.getAttribute('placeholder');

					if (!el.get('value') || el.get('value') === text) {
						el.set('value', text).addClass('placeholder_text');
					}
				});
			}
		}
	};
// Alias window, document.
})(this, this.document);

// Automatically calls all functions in FORMALIZE.init
Y.on('domready', function() {
	FORMALIZE.go();
});