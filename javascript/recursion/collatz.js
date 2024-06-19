/*
  The Collatz conjecture applies to positive integers and speculates that it is always possible to
  get "back to 1" if you follow these steps:
    1. If n is 1, stop.
    2. Otherwise, if n is even, repeat this process on n/2.
    3. Otherwise, if n is odd, repeat this process on 3n + 1.

  Write a recursive function collatz(n) that calculates how many steps it takes to get "back to 1" if 
  you start from n and recurse as indicated above.
*/

function collatz(n) {
  if (n == 1) {
    return 0;
  }
  if (n % 2 == 0) {
    return 1 + collatz(n / 2);
  } else {
    return 1 + collatz((3*n) + 1);
  }
}
console.log(`Number of steps required to go "back to 1" are: ${collatz(27)}`);