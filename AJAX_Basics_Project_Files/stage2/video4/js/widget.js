'use strict';

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = () =>{
  if(xhr.readyState === 4){
    let employees = JSON.parse(xhr.responseText);
    console.log(typeof employees);
  }
};
xhr.open('GET', 'data/employees.json');
xhr.send();
