// Ways to declare a variable
// var, let, const

let firstName = 'Aditya';
let lastName = 'Yadav';

console.log(firstName, lastName);

let age = 27;

console.log(age);

//  Naming Conventions
// - Only letters, numbers, underscores and Dollar$ signs.
// -Can't start with a number.

//  Multi-Word Formatting.
//  firstName = camelCase
//  FirstName = PascalCase
//  first_name = underscore

// Re-assigning variables
age = 31;

console.log(age);

let score;

score = 1;

console.log(score);

if (true) {
  score = score + 1;
  score += 1;
}

console.log(score);

const x = 100;

// x = 15; This would throw exception as x is of type const.

const arr = [1, 2, 3, 4];

arr.push(5);

console.log(arr);

const person = {
  name: 'Ady',
};

person.name = 'Aditya';
person.email = 'golu@gmail.com';

console.log(person);

//  Declare multiple variables at once

let a, b, c;

console.log(a);

const d = 10,
  e = 15;

console.log(d, e);
