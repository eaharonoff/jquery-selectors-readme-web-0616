// declare your functions here...
function paragraphSelector() {
  let el = $('p')
  return el 
}

function  lastImageSelector() {
  let el = $('img:last')
  return el 
}

function ninjaBabySelector() {
  let el = $('#baby-ninja')
  return el 
}

function divSelector() {
  let el = $('.pics')
  return el 
}
//The function should use a first-child selector to return the first list item in the ul with the ID pic-list.
function firstListItem() {
  let el = $('ul li:first-child')
  return el 
}