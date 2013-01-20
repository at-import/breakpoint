/* Author:
*  [your name here]
*/

// touch navigation
$(document).ready(function() {
  // add touch button to toggle menus
  $touch_menu_btn = $("<div id='touch-menu-btn' class='ss-icon ss-standard'>&#xED50;</div>");
  $main_navigation = $('.main-navigation');
  $height = $main_navigation.height();
  $main_navigation.before($touch_menu_btn).css("margin-top", "-"+$height+"px");
  $('html').addClass('touch-nav-processed');
  $touch_menu_btn.toggle(
    function () {
      $(this)
        .addClass("open")
        .html("&#x25B4;");
    },
    function () {
      $(this)
        .removeClass("open")
        .html("&#xED50;");
    }
  );
  $(window).resize(function() {
    $height = $main_navigation.height();
    $main_navigation.css("margin-top", "-"+$height+"px");
  });
});


