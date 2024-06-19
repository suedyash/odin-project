/*
  Write a function that sums squares of numbers in list that may contain more lists.
*/

function SumSquares(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      total += SumSquares(arr[i]);
    } else {
      total += arr[i] * arr[i];
    }
  }
  return total;
}

let l = [1,2,3]; 
console.log(SumSquares(l)); // 1 + 4 + 9 = 14
l = [[1,2],3]; 
console.log(SumSquares(l)); // 1 + 4 + 9 = 14
l = [[[[[[[[[1]]]]]]]]] 
console.log(SumSquares(l)); // 1 = 1
l = [10,[[10],10],[10]] 
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400