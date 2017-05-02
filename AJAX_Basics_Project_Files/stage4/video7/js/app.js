'use strict';
$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault();
    let searchResults = $('#search').val();
    //makes the user unable to search while a search is happening
    let $searchField = $('#search');
    let $submitButton = $('#submit');
    $searchField.prop('disabled', true);
    $submitButton.attr('disabled', true).val('searching...');

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
      $searchField.prop('disabled', false);
      $submitButton.attr('disabled', false).val('Submit');
    };
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  });
});
