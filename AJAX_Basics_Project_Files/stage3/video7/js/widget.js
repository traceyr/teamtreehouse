'use strict';

$(document).ready(function () {
  $.getJSON('../data/employees.json', function (data) {
    var statusHTML = '<ul class="bulleted">';
    $.each(data,function (index, employee) {
      if (employee.inoffice === true) {
        statusHTML +='<li class="in">';
      } else {
        statusHTML +='<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    });
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML)
  }); // end getJSON

  $.getJSON('../data/rooms.json', (val) =>{
    let statusHTML = document.createElement('ul');
    $(statusHTML).addClass('rooms');
    console.log(val);
    $.each(val, (index, value) =>{
      let newUl = document.createElement('li')
      value.available === true ? $(newUl).addClass('empty') : $(newUl).addClass('full');
      $(newUl).html(value.room);
      statusHTML.append(newUl);
    });
    $('#roomList').append(statusHTML);
  })// end second getJSON
}); // end ready
