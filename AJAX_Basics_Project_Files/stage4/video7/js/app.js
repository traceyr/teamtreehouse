'use strict';
$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault();
    let searchResults = $('#search').val();
    let flickerAPI = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

    let flickrOptions = {
      tags: searchResults,
      format: 'json'
    };
    let displayPhotos = (data) =>{
      let photoHTML = `<ul>`;
      $.each(data.items, function(i, photo){
        photoHTML += `<li class="grid-25 tablet-grid-50>"`;
        photoHTML += `<a href="${photo.link}" class="images" title="${photo.author}">`;
        photoHTML += `<img src="${photo.media.m}" /></a></li>`;
      });
      photoHTML += `</ul>`;
      $('#photos').html(photoHTML);
    };
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  });
});
