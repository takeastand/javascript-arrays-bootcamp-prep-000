var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(a, b) {
  b = ["foo", ...a];
  return b;
}

function destructivelyAddElementToBeginningOfArray(a, b) {
  a.unshift(b);
  return a;
}

function addElementToEndOfArray(a, b) {
  b = [...a, "foo"]
  return b;
}

function destructivelyAddElementToEndOfArray(a, b) {
  a.push(b);
  return a;
}

function accessElementInArray(array, index) {
  return array[index];
}

function removeElementFromBeginningOfArray(array) {
  
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();
}