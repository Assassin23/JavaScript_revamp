// Variables are stored on the stack.

const name = 'Alok';
const age = 27;

let newName = name;
newName = 'Rohit';

console.log(name, newName);

//  Reference objects are stored on the heap.

const person = {
  name: 'Aditya',
  age: 27,
};

let newPerson = person;

newPerson.name = 'Baba';

console.log(person, newPerson);
