// Function Declaration

console.log(addDollarSign(12));

function addDollarSign(value) {
  return '$' + value;
}

console.log(addDollarSign(100));

// Function Expression

// console.log(addExclamationSign('Hey')); - gives error
// as used before initialization

const addExclamationSign = function (value) {
  return value + '!';
};

console.log(addExclamationSign('Hey'));
