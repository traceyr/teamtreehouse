'use strict';

function exec(func, arg){
  func(arg);
}

exec(function (something){
  console.log(something);
}, 'Hi');
