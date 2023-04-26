// ||= assigns the right side value if the left  is a falsy value

let a = false;

if (!a) {
  a = 10; // - assign 10 if a is falsy
}

a = a || 10; // - assign 10 if a is falsy
a ||= 10; // - assign 10 if a is falsy
console.log(a);

//  &&= assigns the right side value only if the left is a truthy value

let b = 20;

if (b) {
  b = 10; // - assign 10 if b is truthy
}

b = b && 10; // - assign 10 if b is truthy
b &&= 10; // - assign 10 if b is truthy

console.log(b);

// ??= assigns the right side value only if the left is null or undefined

let c = null;

if (c === null || c === undefined) {
  c = 10; // - assign 10 if c is null or undefined
}

c = c ?? 10; // - assign 10 if c is null or undefined

c ??= 10; // - assign 10 if c is null or undefined

console.log(c);
