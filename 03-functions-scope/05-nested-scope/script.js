// Variable are available in child scope but not in parent scope

function first() {
  let x = 100;

  function second() {
    const y = 200;
    console.log(x + y);
  }
  // console.log(y) - gives error
  second();
}

first();

if (true) {
  const x = 100;

  if (x === 100) {
    const y = 200;
    console.log(x + y);
  }

  // console.log(y) - gives error
}

// console.log(x) - gives error
