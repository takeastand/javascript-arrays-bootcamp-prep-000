var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(a, b) {
  a = [1, 2, 3];
  b = [0, ...a];
  return b;
}

function destructivelyAddElementToBeginningOfArray(a, b) {
  a = [1, 2, 3];
  b = "foo";
  a.unshift(b);
  return a;
}