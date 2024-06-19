/*
  Write a function called "all" which accepts an array and a callback and returns true if every value in 
  the array returns true when passed as a parameter to the callback function.
*/

let copy;
function all(arr, callback) {
  copy = copy || arr.slice(); // shallow copies array

  if (copy.length === 0) {
    return true;
  }

  if (callback(copy[0])) {
    copy.shift(); // remove first element from array
    return all(copy, callback);
  } else {
    return false;
  }
}

const areAllLessThanTen = all([1,2,11], function(num) {
  return num < 10;
});
console.log(areAllLessThanTen);