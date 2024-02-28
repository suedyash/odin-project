// Variables

let message = 'Hello'; //storing the string "Hello" in a variable called "message"
console.log(message); //displays contents of the variable

// defining multiple variables in one 'Let' method using comma-first style
let user1 = 'John'
  , age1 = '25'
  , message1 = 'hello!';
console.log(`${message1}, my name is ${user1} and my age is ${age1}.`);

let user2 = 'Juan More'
  , age2 = age1 // this copies content of age1 into age2
  , message2 = 'Hola!';
console.log(`${message2}, my name is ${user2} and my age is also ${age2}`);

const myInt = 5;
const myFloat = 6.669;
console.log(typeof myInt); //typeof is used to get the type of data
console.log(typeof myFloat); // in these two cases answer received is "number"

// rounding number to a fixed number of decimal places can be done with toFixed();
const lotsOfDecimal = 1.766584958675746364;
console.log(lotsOfDecimal);
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);

// to convert string type number use Number() - common use converting numbers filled in forms as text input
let myNumberAsString = "74";
console.log(typeof myNumberAsString); // recognized as a string
myNumberAsString = Number(myNumberAsString) + 3;
console.log(typeof myNumberAsString); // recognized as a number
console.log(myNumberAsString);

console.log(250 % 1000);

let assignment_x = 50;
assignment_x *= 4;
console.log(assignment_x);

let assignment_y = 50; // var value "50"
assignment_y += 50 * 3; // adds "50" from original value, then adds the result of expression to it => 50 + (50 *3) (ans 200)
console.log(assignment_y);
