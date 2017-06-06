/**
 * jQuery插件
 * 功能:固定在右侧的导航条功能
 */

;(function($, window, document, undefined) {
  $.fn.fixedTool = function() {
    this.css('color', 'red')
    this.each(function() {
      $(this).append('123')
    });
  }
})(jQuery, window, document)
