'use strict';

$(document).ready(function(){
  $('button').on('click', function(){
    $('button').removeClass('selected');
    $(this).addClass('selected');
  })
})
