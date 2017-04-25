'use strict';

let url = 'http://www.website.com/posts';
let data = {
  firstName: 'Tracey', 
  lastName: 'Radcliffe'
}
$.post(url, data, callback);
