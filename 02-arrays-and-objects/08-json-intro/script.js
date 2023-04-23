const post = {
  id: 1,
  title: 'Post one',
  body: 'this is the body',
};

let x;

// Convert to JSON string
x = JSON.stringify(post);

// Convert JSON string to object
const obj = JSON.parse(x);
console.log(obj);
