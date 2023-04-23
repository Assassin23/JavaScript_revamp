const arr = [1, 2, 4, 6, 23];
let x;

arr.push(100);

arr.pop(); // removes & returns last element

arr.unshift(99); // add element to the start

arr.shift(); // removes first element

arr.reverse();

x = arr.includes(4); // returns a bool if element is present or not

x = arr.indexOf(11); // returns index of element or -1

x = arr.slice(1, 4); // [2, 4, 6]

//  in splice we pass start_index and no. of element to consider
// x = arr.splice(2, 1); // [4], but changes arr -> [1, 2, 6, 23]

console.log(x, arr);
