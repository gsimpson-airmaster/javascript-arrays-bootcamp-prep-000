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

function destructivelyAddElementToEndOfArray(element, array) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function 