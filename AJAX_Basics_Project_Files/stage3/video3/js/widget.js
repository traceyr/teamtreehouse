'use strict';

$(document).ready(function() {
  let url = '../data/employees.json';
  $.getJSON(url, (response) => {
    let statusHTML = '<ul class="bulleted">';
    $.each(response, (index, value) => {
      if (value.inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += value.name + '</li>';
    });
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML);
  }); //end getJSON
}); //end ready
