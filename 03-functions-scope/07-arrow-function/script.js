// Normal Function

function add(a, b) {
  return a + b;
}

console.log(add(10, 5));

// Arrow Function

const addition = (a, b) => {
  return a + b;
};

console.log(addition(10, 5));

// Implicit Return
const subtract = (a, b) => a - b;

console.log(subtract(10, 5));

// Can leave off () with a single param
// const square = a => a ** 2; - paranthesis applied by formatter so commenting
// console.log(square(2)); - gives 4

// Returning an Object

const createObj = () => ({
  name: 'Aditya',
});

console.log(createObj());

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
  console.log(n);
});

// Using Arrow function with implicit return
numbers.forEach((n) => console.log(n));
