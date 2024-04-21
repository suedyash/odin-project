/*
  Write a program that takes a user’s input and prints the numbers from one to the number the user entered. 
  However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. 
  For numbers which are multiples of both three and five print FizzBuzz.
*/

document.addEventListener('DOMContentLoaded', function() {
  const runBtn = document.getElementById('run-button');
  runBtn.addEventListener('click', function() {
    const userInput = parseInt(document.getElementById('user-input').value);
    fizzBuzz(userInput);
  });

  function fizzBuzz(number) {
    let count = 0;
    while (count <= number) {
      count++;
      if (count % 3 === 0 && count % 5 === 0) {
        console.log(`FizzBuzz`);
      } else if (count % 3 === 0) {
        console.log(`Fizz`);
      } else if (count % 5 === 0) {
        console.log(`Buzz`);
      } else {
        console.log(count);
      }
    }
  }
});


/*
1. take user input in number
2. print 1 to userinput
3. if userInput is divisible by 3 print Fizz
4. if userInput is divisble by 5 print Buzz
5. if userInput is divisble by 3 and 5 print FizzBuzz
6. else print normal number
*/