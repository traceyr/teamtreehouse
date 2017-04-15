'use strict';

$(document).ready(function(){

  $('li').on('click', function() {
    $(this).text('Clicked!').delay(800).fadeOut(400);
  });

});
