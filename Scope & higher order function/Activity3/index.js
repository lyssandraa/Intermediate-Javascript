// math functions //

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

// higher-order function //
const doMaths = (num1) => {
  return (num2, fn) => {
    return fn(num1, num2);
  };
};

// testing the doMaths function //

//initialise with a number //

const mathWithFive = doMaths(5);

// perform different operations //

console.log(mathWithFive(3, add)); // Output: 8 (5 + 3)
console.log(mathWithFive(3, subtract)); // Output: 2 (5 - 3)
console.log(mathWithFive(3, multiply)); // Output: 15 (5 * 3)
console.log(mathWithFive(3, divide)); // Output: 1.666... (5 / 3)
