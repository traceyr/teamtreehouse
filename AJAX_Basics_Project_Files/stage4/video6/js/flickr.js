'use strict';
$(document).ready(function () {
  $('button').on('click',function () {
    $('button').removeClass('selected');
    $(this).addClass('selected');
    let flickerAPI = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
    let animal = $(this).text();
    let flickrOptions = {
      tags: animal,
      format: 'json'
    };
    let displayPhotos = (data) =>{

    };
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  });
}); // end ready
