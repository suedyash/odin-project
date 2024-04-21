/*
  When the user inputs a number
  Initialize a counter variable and set its value to zero
  While counter is smaller than user inputted number increment the counter by one
  Print the value of the counter variable
*/
const userInput = parseInt(prompt("input number"));
console.log("you inputted:", userInput);
function uptoNumber(number) {
  let counter = 0;
  while (counter <= number) {
    console.log(counter);
    counter++;
  }
}
uptoNumber(userInput);