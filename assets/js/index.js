'use strict';

const messageArray = []

const form = document.getElementById('root-form');
const lists = document.getElementById('lists');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const {target:{textInput}} = e;
  const inputValue = textInput.value.trim();
  if(textInput.value.trim()){
    messageArray.push(textInput.value);
    lists.append(createElement('li', inputValue));
    form.reset();
  }
})

function createElement(type, child){
  const elem = document.createElement(type);
  elem.append(child);
  return elem;
 }