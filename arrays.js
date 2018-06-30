var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ]
  
function  addElementToBeginningOfArray(element, array) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(element, array) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(element, array) {
  return [...array, element]
}

function (element, array) {
  
}