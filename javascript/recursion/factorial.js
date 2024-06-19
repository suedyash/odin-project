function printFactorial(n, total = 1) {
  if (n <= 1) {
    return console.log("The Factorial is: " + total);
  }
  return printFactorial(n - 1, total * n);
}
//printFactorial(6);

function fact(n) {
  if (n == 1) {
    return 1;
  }
  return n * fact(n-1);
}
console.log(fact(5));