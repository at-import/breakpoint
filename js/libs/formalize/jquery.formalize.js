//
// Note: This file depends on the jQuery library.
//

// Module pattern:
// http://yuiblog.com/blog/2007/06/12/module-pattern/
var FORMALIZE = (function($, window, document, undefined) {
	// Private constants.
	var PLACEHOLDER_SUPPORTED = 'placeholder' in document.createElement('input');
	var AUTOFOCUS_SUPPORTED = 'autofocus' in document.createElement('input');
	var WEBKIT = 'webkitAppearance' in document.createElement('select').style;
	var IE6 = !!($.browser.msie && parseInt($.browser.version, 10) === 6);
	var IE7 = !!($.browser.msie && parseInt($.browser.version, 10) === 7);

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
				$('html').addClass('is_webkit');
			},
			// FORMALIZE.init.full_input_size
			full_input_size: function() {
				if (!IE7 || !$('textarea, input.input_full').length) {
					return;
				}

				// This fixes width: 100% on <textarea> and class="input_full".
				// It ensures that form elements don't go wider than container.
				$('textarea, input.input_full').wrap('<span class="input_full_wrap"></span>');
			},
			// FORMALIZE.init.ie6_skin_inputs
			ie6_skin_inputs: function() {
				// Test for Internet Explorer 6.
				if (!IE6 || !$('input, select, textarea').length) {
					// Exit if the browser is not IE6,
					// or if no form elements exist.
					return;
				}

				// For <input type="submit" />, etc.
				var button_regex = /button|submit|reset/;

				// For <input type="text" />, etc.
				var type_regex = /date|datetime|datetime-local|email|month|number|password|range|search|tel|text|time|url|week/;

				$('input').each(function() {
					var el = $(this);

					// Is it a button?
					if (this.getAttribute('type').match(button_regex)) {
						el.addClass('ie6_button');

						/* Is it disabled? */
						if (this.disabled) {
							el.addClass('ie6_button_disabled');
						}
					}
					// Or is it a textual input?
					else if (this.getAttribute('type').match(type_regex)) {
						el.addClass('ie6_input');

						/* Is it disabled? */
						if (this.disabled) {
							el.addClass('ie6_input_disabled');
						}
					}
				});

				$('textarea, select').each(function() {
					/* Is it disabled? */
					if (this.disabled) {
						$(this).addClass('ie6_input_disabled');
					}
				});
			},
			// FORMALIZE.init.autofocus
			autofocus: function() {
				if (AUTOFOCUS_SUPPORTED || !$(':input[autofocus]').length) {
					return;
				}

				$(':input[autofocus]:visible:first').focus();
			},
			// FORMALIZE.init.placeholder
			placeholder: function() {
				if (PLACEHOLDER_SUPPORTED || !$(':input[placeholder]').length) {
					// Exit if placeholder is supported natively,
					// or if page does not have any placeholder.
					return;
				}

				FORMALIZE.misc.add_placeholder();

				$(':input[placeholder]').each(function() {
					var el = $(this);
					var text = el.attr('placeholder');

					el.focus(function() {
						if (el.val() === text) {
							el.val('').removeClass('placeholder_text');
						}
					}).blur(function() {
						FORMALIZE.misc.add_placeholder();
					});

					// Prevent <form> from accidentally
					// submitting the placeholder text.
					el.closest('form').submit(function() {
						if (el.val() === text) {
							el.val('').removeClass('placeholder_text');
						}
					}).bind('reset', function() {
						setTimeout(FORMALIZE.misc.add_placeholder, 50);
					});
				});
			}
		},
		// FORMALIZE.misc
		misc: {
			// FORMALIZE.misc.add_placeholder
			add_placeholder: function() {
				if (PLACEHOLDER_SUPPORTED || !$(':input[placeholder]').length) {
					// Exit if placeholder is supported natively,
					// or if page does not have any placeholder.
					return;
				}

				$(':input[placeholder]').each(function() {
					var el = $(this);
					var text = el.attr('placeholder');

					if (!el.val() || el.val() === text) {
						el.val(text).addClass('placeholder_text');
					}
				});
			}
		}
	};
// Alias jQuery, window, document.
})(jQuery, this, this.document);

// Automatically calls all functions in FORMALIZE.init
jQuery(document).ready(function() {
	FORMALIZE.go();
});