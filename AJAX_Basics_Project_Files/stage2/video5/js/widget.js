'use strict';

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    let employees = JSON.parse(xhr.responseText);
    let statusHTML = document.createElement('ul');
    statusHTML.classList.add('bulleted');
    //creates li tags with name and correct class
    for(let i = 0; i < employees.length; i++){
      let li = document.createElement('li');
      li.innerHTML = employees[i].name;
      employees[i].inoffice ? li.classList.add('in') : li.classList.add('out');
      statusHTML.appendChild(li);
    }
    //append statusHTML to DOM
    document.getElementById('employeeList').appendChild(statusHTML);
  }
};
xhr.open('GET', 'data/employees.json');
xhr.send();
