//
// Note: This file depends on the Prototype library.
//

// Module pattern:
// http://yuiblog.com/blog/2007/06/12/module-pattern/
var FORMALIZE = (function(window, document, undefined) {
	// Private constants.
	var PLACEHOLDER_SUPPORTED = 'placeholder' in document.createElement('input');
	var AUTOFOCUS_SUPPORTED = 'autofocus' in document.createElement('input');
	var WEBKIT = 'webkitAppearance' in document.createElement('select').style;
	var IE6 = IE(6);
	var IE7 = IE(7);

	// Internet Explorer detection.
	function IE(version) {
		var b = document.createElement('b');
		b.innerHTML = '<!--[if IE ' + version + ']><br><![endif]-->';
		return !!b.getElementsByTagName('br').length;
	}

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
				$$('html')[0].addClassName('is_webkit');
			},
			// FORMALIZE.init.full_input_size
			full_input_size: function() {
				if (!IE7 || !$$('textarea, input.input_full').length) {
					return;
				}

				// This fixes width: 100% on <textarea> and class="input_full".
				// It ensures that form elements don't go wider than container.
				$$('textarea, input.input_full').each(function(el) {
					Element.wrap(el, 'span', {'class': 'input_full_wrap'});
				});
			},
			// FORMALIZE.init.ie6_skin_inputs
			ie6_skin_inputs: function() {
				// Test for Internet Explorer 6.
				if (!IE6 || !$$('input, select, textarea').length) {
					// Exit if the browser is not IE6,
					// or if no form elements exist.
					return;
				}

				// For <input type="submit" />, etc.
				var button_regex = /button|submit|reset/;

				// For <input type="text" />, etc.
				var type_regex = /date|datetime|datetime-local|email|month|number|password|range|search|tel|text|time|url|week/;

				$$('input').each(function(el) {
					// Is it a button?
					if (el.getAttribute('type').match(button_regex)) {
						el.addClassName('ie6_button');

						/* Is it disabled? */
						if (el.disabled) {
							el.addClassName('ie6_button_disabled');
						}
					}
					// Or is it a textual input?
					else if (el.getAttribute('type').match(type_regex)) {
						el.addClassName('ie6_input');

						/* Is it disabled? */
						if (el.disabled) {
							el.addClassName('ie6_input_disabled');
						}
					}
				});

				$$('textarea, select').each(function(el) {
					/* Is it disabled? */
					if (el.disabled) {
						el.addClassName('ie6_input_disabled');
					}
				});
			},
			// FORMALIZE.init.autofocus
			autofocus: function() {
				if (AUTOFOCUS_SUPPORTED || !$$('[autofocus]').length) {
					return;
				}

				$$('[autofocus]')[0].focus();
			},
			// FORMALIZE.init.placeholder
			placeholder: function() {
				if (PLACEHOLDER_SUPPORTED || !$$('[placeholder]').length) {
					// Exit if placeholder is supported natively,
					// or if page does not have any placeholder.
					return;
				}

				FORMALIZE.misc.add_placeholder();

				$$('[placeholder]').each(function(el) {
					var text = el.getAttribute('placeholder');
					var form = el.up('form');

					el.observe('focus', function() {
						if (el.value === text) {
							el.value = '';
							el.removeClassName('placeholder_text');
						}
					});

					el.observe('blur', function() {
						FORMALIZE.misc.add_placeholder();
					});

					// Prevent <form> from accidentally
					// submitting the placeholder text.
					form.observe('submit', function() {
						if (el.value === text) {
							el.value = '';
							el.removeClassName('placeholder_text');
						}
					});

					form.observe('reset', function() {
						setTimeout(FORMALIZE.misc.add_placeholder, 50);
					});
				});
			}
		},
		// FORMALIZE.misc
		misc: {
			// FORMALIZE.misc.add_placeholder
			add_placeholder: function() {
				if (PLACEHOLDER_SUPPORTED || !$$('[placeholder]').length) {
					// Exit if placeholder is supported natively,
					// or if page does not have any placeholder.
					return;
				}

				$$('[placeholder]').each(function(el) {
				  var text = el.getAttribute('placeholder');

					if (!el.value || el.value === text) {
						el.value = text;
						el.addClassName('placeholder_text');
					}
				});
			}
		}
	};
// Alias window, document.
})(this, this.document);

// Automatically calls all functions in FORMALIZE.init
$(document).observe('dom:loaded', function() {
	FORMALIZE.go();
});