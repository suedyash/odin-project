/*
  Write a function that takes two inputs "n" and "m" and outputs the number of unique paths from the 
  top left corner to the bottom right corner of a "n x m" grid.
  Constraints: you can only move down or right 1 unit at a time. 
*/

function grid_path(n, m) {
  if (n == 1 || m == 1) {
    return 1;
  }
  return grid_path(n-1, m) + grid_path(n, m-1);
}

console.log("Unique Paths for 1 x 1", grid_path(1, 1));
console.log("Unique Paths for 2 x 4", grid_path(2, 4));
console.log("Unique Paths for 3 x 3", grid_path(3, 3));
console.log("Unique Paths for 11 x 20", grid_path(11, 20));