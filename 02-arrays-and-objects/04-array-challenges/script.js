const arr = [1, 2, 3, 4, 5];
arr.reverse().unshift(6);
arr.push(0);
console.log(arr);

const arr1 = [5, 6, 7, 8, 9, 10];

const arr0 = [1, 2, 3, 4, 5];
let arr2 = [...arr0, ...arr1.slice(1)];

console.log(arr2);
