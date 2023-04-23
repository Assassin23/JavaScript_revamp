let x;

const name = 'Aditya';
const age = 27;

x = 'My name is ' + name + ' and am ' + age + ' years old.';

// Template Literals
x = `My name is ${name} and am ${age + 1} years old.`;

// String Properties & Methods
const s = 'Hello World';

x = s.length;

x = s.__proto__; // list all available methods & properties

x = s[0]; // H
x = s.toUpperCase();
x = s.toLowerCase();
x = s.charAt(0); // H
x = s.indexOf('e'); // 1
x = s.substring(0, 4); // Hell
x = s.substring(7); // orld
x = s.slice(-11, 6); // Hello
x = s.slice(0, 5); // Hello

x = '         Hello   World  ';
x = x.trim(); // Hello World

x = s.replace('World', 'Baba'); // Hello Baba
x = s.includes('Hello'); // true

x = s.split(); // ['Hello World']
x = s.split(' '); // ['Hello', 'World']
x = s.split(''); // ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']

console.log(x);
