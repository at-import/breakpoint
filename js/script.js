/* Author:
*  [your name here]
*/

// fix heights and spacing on tab groups
$(document).ready(function(){
  $('html').addClass('tabs-processed');
  $tabs = $('.tabs');
  $padding_difference = 28;
  $('.tabs .content').css('bottom', 'auto');
  function fix_tabs_min_height(tabs) {
    $these_tabs = tabs;
    $these_tabs.find('.content').hide();
    $this_checked_content = $these_tabs
      .find('[type=radio]:checked')
      .siblings('.content');
    $this_checked_content.show();
    $this_height = $this_checked_content.height();
    $these_tabs
      .css('min-height', $this_height + $padding_difference);
  }
  $tabs.each(function(index, el){
    fix_tabs_min_height($(el));
    $(this).find('[type=radio]').change(function() {
      fix_tabs_min_height($(el));
    });
  });
  $(window).resize(function() {
    $tabs.each(function(index, el){
      fix_tabs_min_height($(el));
    });
  });
});

// <details> polyfill
$(document).ready(function(){
  $('details').details();
});
