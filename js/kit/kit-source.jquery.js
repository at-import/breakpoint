/*global jQuery */
/*!
* Crawl the elements page and show example source code
*/
(function($){
  $('div.element .markup').wrap('<div class="example">').each(function(){
    var thisHTML = $(this).html().replace('</textarea>', '&lt;/textarea&gt;');
    $(this).after('<div class="show-source"><div class="show-hide">show source</div><textarea class="show-source-textarea">'+ thisHTML +'</textarea></div>');
    $(this).find('+ .show-source textarea.show-source-textarea').height($(this).height()).css('min-height', '100px').hide();
    $(this).find('+ .show-source .show-hide').toggle(function(){
      $(this).html('hide source');
      $(this).find('+ textarea.show-source-textarea').slideDown();
    }, function(){
      $(this).html('show source');
      $(this).find('+ textarea.show-source-textarea').slideUp();
    });
  });
})(jQuery);

/*!
* Create submenus based on the available sections
*/
(function($){
  if($sectionNav = $('nav.section-nav').append('<ul class="sub-nav">').find('.sub-nav')) {
    $('.element-group').each(function(index) {
      $sectionNav
        .append('<li>' + $(this)
        .find('.section-title')
        .text().trim() + '</li>');
      $thisLI = $sectionNav
        .find('li')
        .last();
      $thisUL = $thisLI
        .append('<ul>')
        .find('ul')
        .last();
      $(this)
        .find('div.element')
        .each(function(index) {
          $thisID = $(this).attr('id');
          $re = /(\S*)-el/;
          $thisUL.append('<li><a href="#' + $thisID + '">' + $thisID.replace($re, "$1") + '</a></li>');
        });
    });
  }
})(jQuery);


/*!
* Collapse markup sections
*/
function foldArticle($el, $dir) {
  $dir = typeof $dir !== 'undefined' ? $dir : 'close';
  console.log($el);
  console.log($dir);
  if($dir == 'close') {
    $el
      .attr('data-label', 'open')
      // .html('open')
      .removeClass('fold-article-close')
      .addClass('fold-article-open')
      .parents('.element').addClass('closed').end()
      .parent().siblings().slideUp().end();
  } else {
    $el
      .attr('data-label', 'close')
      // .html('close')
      .removeClass('fold-article-open')
      .addClass('fold-article-close')
      .parents('.element').removeClass('closed').end()
      .parent().siblings().slideDown().end();
  }
}
function foldSection($el, $dir) {
  $dir = typeof $dir !== 'undefined' ? $dir : 'close';
  console.log($el);
  console.log($dir);
  if($dir == 'close') {
    $el
      .attr('data-label', 'open')
      // .html('open')
      .removeClass('fold-section-close').addClass('fold-section-open')
      .parent().siblings('.element:not(.closed)').find('.fold-article').click()
      ;
  } else {
    $el
      .attr('data-label', 'close')
      // .html('close')
      .removeClass('fold-section-open').addClass('fold-section-close')
      .parent().siblings('.element.closed').find('.fold-article').click()
      ;
  }
}

(function($){
  $('div.element').find('.element-title').append('<a href="#" class="fold-article fold-article-close" data-label="close"></a>');
  $('.fold-article').toggle(
    function() {
      foldArticle($(this));
    },
    function() {
      foldArticle($(this), 'open');
    }
  );
  // element groups
  $('.section-title').append('<a href="#" class="fold-section fold-section-close" data-label="fold section"></a>');
  $('.fold-section').toggle(
    function() {
      foldSection($(this));
    },
    function() {
      foldSection($(this), 'open');
    }
  );
})(jQuery);


/*!
* Side Panel Menu
*/
(function($){
  if($('body.documentation').length == 0){
    $('header.kit-ui').prepend('<a class="menu-trigger"></a>');
    var jPM = $.jPanelMenu();
    jPM.on();
  }
})(jQuery);
