// var vs let,const

if (true) {
  const a = 300;
  let b = 200;
  var c = 400;
  console.log(a, b, c);
}

// console.log(a); not  available in global scope
// console.log(b); not  available in global scope
console.log(c); // var is not block scoped!!

function run() {
  const a = 300;
  let b = 200;
  var c = 400;
  console.log(a, b, c);
}
run();

// console.log(a); not  available in global scope
// console.log(b); not  available in global scope
// console.log(c); not  available in global scope

var bar = 1;
console.log(window.bar); // bar is added to window
