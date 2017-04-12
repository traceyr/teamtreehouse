'use strict';
const toggleList = document.getElementById('toggleList');
const listSection = document.querySelector('.list');
const input = document.querySelector('input.description');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');

toggleList.addEventListener('click', ()=>{
  if(listSection.style.display === 'none'){
    toggleList.textContent = 'Hide List';
    listSection.style.display = 'block';
  } else{
    toggleList.textContent = 'Show List';
    listSection.style.display = 'none';
  }
});

button.addEventListener('click', () => {
  p.innerHTML = input.value + ':';
});
