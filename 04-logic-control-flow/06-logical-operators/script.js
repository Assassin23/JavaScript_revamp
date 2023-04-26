console.log(10 < 20 && 30 > 15 && 40 > 30); // - true
console.log(10 < 20 && 30 < 15 && 40 > 30); // - false if any condition is false

console.log(10 < 20 || 30 < 15 || 40 > 30); // - true if any condition is true

//  && - will return first falsy value or the last value

let a;
a = 10 && 20; // - 20
a = 10 && 20 && 30; // - 30
a = 10 && 0 && 30; // - 0 as 0 is falsy
a = 10 && '' && 0 && 30; // - '' as it is falsy

console.log(a);

let posts = ['Post 1', 'Post 2']; // -'Post 1'
posts = []; // - undefined
console.log(posts[0]);
posts.length > 0 && console.log(posts[0]); // - '' (empty string)

posts = ['Post 1', 'Post 2'];
posts.length > 0 && console.log(posts[0]); // - Post 1

//  || - will return the first truthy value or the last value

let b;

b = 10 || 20; // - 10
b = 0 || 20; // - 20
b = 0 || null || '' || undefined; // -  undefined (last value)

console.log(b);

//  ?? - returns the right side operand when left is either null or undefined
let c;

c = 10 ?? 20; // - 10
c = null ?? 20; // - 20
c = undefined ?? 20; // - 20
c = 0 ?? 20; // - 0
c = '' ?? 20; // - ''

console.log(c);
