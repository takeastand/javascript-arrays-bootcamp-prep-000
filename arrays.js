var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(a, b) {
  a = [1];
  b = ["foo", ...a];
  return b;
}

function destructivelyAddElementToBeginningOfArray(a, b) {

  a.unshift(b);
  return a;
}