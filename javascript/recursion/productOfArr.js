/*
  Write a function called productOfArr which takes in an array of numbers and returns the product 
  of them all
*/

function productOfArr(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr.shift() * productOfArr(arr);
}

console.log(productOfArr([1,2,3]));
console.log(productOfArr([4,4,4]));
console.log(productOfArr([2,4,2]));