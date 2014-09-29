$(window).load(function() {
  'use strict';
  $('.flexslider').flexslider({
    animation: Modernizr.touch ? 'slide' : 'fade',
    multipleKeyboard: true
  });
});
