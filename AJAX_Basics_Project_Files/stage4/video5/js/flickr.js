'use strict';

$(document).ready(function () {
  $('button').on('click',function () {
    $("button").removeClass("selected");
    $(this).addClass("selected");
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  });
}); // end ready
