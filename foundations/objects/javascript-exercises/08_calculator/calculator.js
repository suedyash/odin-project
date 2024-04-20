const add = (x, y) => x + y;

const subtract = (x, y) => x - y;

const sum = function() {
	
};

const multiply = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(n) {
	if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
