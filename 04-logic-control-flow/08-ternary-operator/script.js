let age = 13;

// using an if statement

if (age >= 18) {
  console.log('You can Vote.');
} else {
  console.log('You can not Vote.'); // - this will run
}

// Using a Ternary Operator
age = 30;
age >= 18 ? console.log('You can vote.') : console.log('You can not Vote.'); // - You can Vote

// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;

console.log(canVote); // - true

// Multiple statements
const auth = true;
let redirect;
if (auth) {
  alert('Welcome to the Dashboard.');
  redirect = '/dashboard';
} else {
  alert('Access Denied.');
  redirect = '/login';
}

console.log(redirect); // - '/dashboard'

const auth1 = false;
const redirect1 = auth1
  ? (alert('Welcome to Dashboard'), '/dashboard')
  : (alert('Access Denied'), '/login');

console.log(redirect1); // - '/login'

auth ? console.log('Welcome') : null;

auth && console.log('Wel to the Dashboard');
