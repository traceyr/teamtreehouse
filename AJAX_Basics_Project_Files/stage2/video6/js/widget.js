'use strict';

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    let employees = JSON.parse(xhr.responseText);
    let statusHTML = '<ul class="bulleted">';
    for (let i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', '../data/employees.json');
xhr.send();

let roomReq = new XMLHttpRequest();
roomReq.onreadystatechange = function () {
  if(roomReq.readyState === 4 && roomReq.status === 200) {
    let rooms = JSON.parse(roomReq.responseText);
    let statusHTML = '<ul class="rooms">';
    for (let i=0; i<rooms.length; i ++) {
      if (rooms[i].available === true) {
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
      }
      statusHTML += rooms[i].room;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML;
  }
};
roomReq.open('GET', '../data/rooms.json');
roomReq.send();
