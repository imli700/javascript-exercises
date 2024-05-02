const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  if (arr.length) {

    let value = arr.reduce((accu, currentValue) => {
      return accu + currentValue;
    }, 0)

    return value;
  } else return 0;
};

const multiply = function(arr) {
  let result = arr.reduce((accu, current) => {
    return accu * current;
  })

  return result;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(number) {
  let fact = number;

  if (number === 0) {
    return 1;
  }

  for (let i = 1; i < number; i++) {
    fact *= i;
  }
  return fact;
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
