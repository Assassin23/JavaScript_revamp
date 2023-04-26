if (true) {
  console.log('This will run.');
}

if (false) {
  console.log('This will not run.');
}

const x = 5;
let y = 5;

if (x >= y) {
  console.log(`${x} is greater than or equal to ${y}.`);
}

if (x === y) {
  console.log(`${x} is equal to ${y}.`);
} else {
  console.log(`${x} is Not equal to ${y}.`);
}
y = 9;
if (x !== y) {
  console.log(`${x} is NOT equal to ${y}.`);
}

// Shorthand if
if (x === y) console.log(`${x} is NOT equal to ${y}.`);
else console.log('This is false');

if (x < y)
  console.log(`${x} is NOT equal to ${y}.`), console.log('This is true.');
else console.log('This is false');
