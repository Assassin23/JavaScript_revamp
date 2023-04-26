const items = ['book', 'table', 'chair', 'kite'];
const users = [
  { name: 'Alok' },
  { name: 'Aman' },
  { name: 'Anurag' },
  { name: 'Rajat' },
];

for (const item of items) {
  console.log(item);
}

for (const user of users) {
  console.log(user.name);
}

// Loop over string
const str = 'Hello World';

for (const letter of str) {
  console.log(letter);
}

// loop over maps
const map = new Map();
map.set('name', 'John');
map.set('age', '30');

for (const [key, value] of map) {
  console.log(key, value);
}
