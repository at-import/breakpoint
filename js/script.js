/* Author:
*  [your name here]
*/

// add a class to style the active tabs
$(document).ready(function() {
  function set_tabset(tabset) {
    $tabset = tabset;
    $checked_id = $tabset.find('[type=radio]:checked').attr('id');
    $tabset.find('label').removeClass('radio-checked');
    $tabset.find('label[for='+ $checked_id +']').addClass('radio-checked');
  }
  $('.tabset').each(function(index, el) {
    set_tabset($(this));
  });
  $('[type=radio]').change(function() {
    set_tabset($(this).parents('.tabset'));
  });
});

// <details> polyfill
$(document).ready(function(){
  $('details').details();
});

// fix label taps for ipad 1
if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)) {
  $(document).ready(function () {
    $('label[for]').click(function () {
      var el = $(this).attr('for');
      if ($('#' + el + '[type=radio], #' + el + '[type=checkbox]').attr('selected', !$('#' + el).attr('selected'))) {
        return;
      } else {
        $('#' + el)[0].focus();
      }
    });
  });
}
