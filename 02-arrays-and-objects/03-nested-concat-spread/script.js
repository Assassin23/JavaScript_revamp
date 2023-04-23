let x;

const fruits = ['apple', 'orange', 'pear'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

// fruits.push(berries); // adds another array inside the array

// x = fruits;
// x = fruits[3][0];

x = fruits.concat(berries); // extend the array with the given array's elements

// Spread Operator (...)

x = [...fruits, ...berries]; // unpacks/spreads the given array's elements

// Flatten Arrays

const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat(); // flattens the araay i.e no nested elements

// Static methods on Array object
x = Array.isArray(fruits); // true
x = Array.isArray('Hello');

x = Array.from('12345');

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c); // [1, 2, 3]

console.log(x);
