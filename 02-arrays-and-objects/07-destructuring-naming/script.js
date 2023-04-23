let x;

const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

x = person;

// Destructuring

const todo = {
  id: 1,
  title: 'Buy Milk',
  user: {
    name: 'John',
  },
};

const {
  id: todoId, // renaming variable
  title,
  user: { name },
} = todo;

console.log(name, todoId);

// Destructure Arrays

const numbers = [23, 43, 56, 87];

const [first, second, ...nums] = numbers; // ... here is the rest operator

console.log(first, second, nums);
