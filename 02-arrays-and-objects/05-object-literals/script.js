let x;

const person = {
  name: 'John Doe',
  'has home': false,
  age: 30,
  isAdmin: true,
  address: {
    street: '123 main st',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};

x = person.name;
x = person['age'];
x = person.address.city;
x = person.hobbies[0];

person.name = 'Jane Doe';
delete person.isAdmin;

person.greet = function () {
  console.log(`Hi, My name is ${this.name}`);
};
person.greet();

x = person['has home']; // cannot use dot notation for keys with spaces
console.log(x);
