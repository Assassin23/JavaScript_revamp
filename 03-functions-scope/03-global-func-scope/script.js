let x = 100;

console.log(x, 'in global');

function scope() {
  console.log(x, 'in function');
}

scope();

if (true) {
  console.log(x, 'in block');
}

function add() {
  const y = 90;
  console.log(y);
}

add();
// console.log(y); This will throw error
// as y is not available in global scope.
