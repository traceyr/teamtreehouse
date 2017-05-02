'use strict';
$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault();
    $('#photos').html('');
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
      console.log(data.items.length);
      if(data.items.length === 0) {
        photoHTML += `<li> The search ${searchResults} found zero results in flickr. Try a different search!</li>`;
      } else {
        $.each(data.items, function(i, photo){
          photoHTML += `<li class="grid-25 tablet-grid-50>"`;
          photoHTML += `<a href="${photo.link}" class="images" title="${photo.author}">`;
          photoHTML += `<img src="${photo.media.m}" /></a></li>`;
        });
      }
      photoHTML += `</ul>`;
      $('#photos').html(photoHTML);
      //removes disabled properties
      $searchField.prop('disabled', false);
      $submitButton.attr('disabled', false).val('Submit');
    };
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  });
});
