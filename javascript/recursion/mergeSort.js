/*
  A significant part of computer science is dedicated to sorting data. An algorithm which uses the 
  ‘divide and conquer’ approach of recursion is able to reduce a sorting problem to smaller and smaller 
  sub-problems.
  Merge sort is one such sorting algorithm, and can be much faster than other algorithms such as 
  bubble sort on the right data sets. Essentially merge sort recurses through an array of unsorted data 
  until it reaches its smallest sub-set, a single item. Of course an array with a single item is 
  considered sorted. Merge sort then merges the single items back together in sorted order. Pretty clever!
  
  Build a function mergeSort that takes in an array and returns a sorted array, using a 
  recursive merge sort methodology. An input of [3, 2, 1, 13, 8, 5, 0, 1] should return 
  [0, 1, 1, 2, 3, 5, 8, 13], and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].
*/

/*
  1. sort the left half of the array
  2. sort the right half of the array
  3. merge them together
*/

function mergeSort(arr) {
  if (arr.length == 1) {
    return arr;
  }
  const  middle_arr = Math.floor(arr.length / 2);
  const leftHalf_arr = arr.slice(0, middle_arr);  
  const rightHalf_arr = arr.slice(middle_arr, arr.length);
  return merge(mergeSort(leftHalf_arr), mergeSort(rightHalf_arr));
}

function merge(leftHalf, rightHalf) {
  const result = [];

  while (leftHalf.length && rightHalf.length) {
    if (leftHalf[0] <= rightHalf[0]) {
      result.push(leftHalf.shift());
    } else {
      result.push(rightHalf.shift());
    }
  }

  while (leftHalf.length) {
    result.push(leftHalf.shift());
  }

  while (rightHalf.length) {
    result.push(rightHalf.shift());
  }

  return result;
}

let input1 = [3, 2, 1, 13, 8, 5, 0, 1];
console.log(`1. Unsorted: ${input1} | Sorted: ${mergeSort(input1)}`);
let input2 = [105, 79, 100, 110];
console.log(`1. Unsorted: ${input2} | Sorted: ${mergeSort(input2)}`);