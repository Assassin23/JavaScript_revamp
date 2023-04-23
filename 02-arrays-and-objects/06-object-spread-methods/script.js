let x;

// const todo = {};
const todo = new Object(); // works same as above

todo.id = 1;
todo.task = 'Buy Milk';
todo.isCompleted = false;

x = todo;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { obj1, obj2 }; // nested objects
const obj4 = { ...obj1, ...obj2 };
const obj5 = Object.assign({}, obj1, obj2); // same as ... operator

x = obj5;

x = Object.keys(obj5); // array of keys
x = Object.values(obj5); // array of values
x = Object.entries(obj5); // array of key-value pairs

x = obj5.hasOwnProperty('a'); // check if obj has the given property

console.log(x);
