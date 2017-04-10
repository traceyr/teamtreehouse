'use strict';

// const myHeading = document.getElementsByTagName('h1')[0];
// const myButton = document.getElementById('myButton');
// const myTextInput = document.getElementById('myTextInput');
//
// myButton.addEventListener('click', () => {
//   myHeading.style.color = myTextInput.value;
// });
const myList = document.getElementsByTagName('li');

for(let i = 0; i < myList.length; i++){
  myList[i].style.color = 'purple';
}
