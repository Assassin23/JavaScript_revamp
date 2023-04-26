const email = 'test@test.com';

if (email) {
  console.log(' You passed in an email.');
}

console.log(Boolean(email));

// Falsy Values:
//  - false
// - 0
// - "" or '' (Empty String)
// - null
// - undefined
// - NaN

const x = '';

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy.');
}

// Truthy Values
// - Everything that is not falsy
// - true - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function (){} (empty function)

// Caveats
const children = 2;

if (children) {
  console.log(`You have ${children} children`); // This will not run for children = 0
} else {
  console.log('Please enter number of children');
}

let child = 0;

if (child != undefined) {
  console.log(`You have ${child} children`); // This will run for children = 0
} else {
  console.log('Please enter number of children');
}

if (!isNaN(child)) {
  console.log(`You have ${child} children`); // This will run for children = 0
} else {
  console.log('Please enter number of children');
}

// checking for empty arrays

const posts = ['Post 1', 'Post 2'];

if (posts) {
  console.log('List posts');
} else {
  console.log('No Posts to lists');
}

const post1 = [];

if (post1) {
  console.log('List posts'); // - this will run
} else {
  console.log('No Posts to lists');
}

if (post1.length > 0) {
  console.log('List posts');
} else {
  console.log('No Posts to lists');
}

// checking for empty obj
const user = {};

if (user) {
  console.log(' List user'); // - This will still run
} else {
  console.log('No User');
}

if (Object.keys(user).length > 0) {
  console.log(' List user'); // - This will not run
} else {
  console.log('No User');
}

// Loose Equality (==)

console.log(false == 0); // - gives true
console.log('' == 0); // - gives true
console.log(null == undefined); // - gives true

console.log(false === 0); // - gives false
console.log('' === 0); // - gives false
console.log(null === undefined); // - gives false
