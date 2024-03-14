//1.
let ans1 = document.getElementById('ans-1');
ans1.addEventListener('click', function() {
  let x = parseInt(prompt('enter number'));
  function add7(number) {
    number += 7;
    return number;
  }
  console.log(add7(x));
});

//2.
let ans2 = document.getElementById('ans-2');
ans2.addEventListener('click', function() {
  let x = parseInt(prompt('enter first number...'));
  let y = parseInt(prompt('enter second number...'));
  function multiply(number1, number2) {
    product = number1 * number2;
    return product
  }
  console.log(multiply(x, y));
});

//3.
let ans3 = document.getElementById('ans-3');
ans3.addEventListener('click', function() {
  let userString = prompt('please enter a string to capitalize first letter of...');
  function capitalizeFirstLetter(string) {
    let firstLetter = string.charAt(0).toUpperCase();
    let restOfString = string.slice(1);
    result = firstLetter + restOfString;
    return result; 
  }
  console.log(capitalizeFirstLetter(userString));
});

//4
let ans4 = document.getElementById('ans-4');
ans4.addEventListener('click', function() {
  let input = prompt('please enter string that you want last letter of...');
  function getLastLetter(string) {
    let lastLetter = string.charAt(string.length - 1);
    return lastLetter;
  }
  console.log(getLastLetter(input));
});