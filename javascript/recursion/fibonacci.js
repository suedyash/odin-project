/*
  The Fibonacci Sequence, is a numerical sequence where each number is the sum of the two numbers before it. 
  Eg. 0, 1, 1, 2, 3, 5, 8, 13 are the first eight digits in the sequence.

  Using both iterative and recursive functions, write a function which takes a number and returns an array
  containing that many numbers from the Fibonacci Sequence. Using an example input of 8,
  this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].
*/

function fibs(n) {
  let array = [0, 1];
  for (let i = 1; i < (n-1); i++) {
    let firstValue = array[i-1];
    let secondValue = array[i];
    let result = firstValue + secondValue;
    array.push(result);
  }
  return array;
}
console.log("Fibonacci Sequence using Iteration: ", fibs(8));

let recArray = [0, 1];
function fibsRec(n) {
  if (n <= 2) {
    return recArray;
  }
  firstValue = recArray[recArray.length - 2];
  secondValue = recArray[recArray.length - 1];
  recArray.push(firstValue + secondValue);  
  return fibsRec(n - 1);
}
console.log("Fibonacci Sequence using Recursion: ", fibsRec(8));