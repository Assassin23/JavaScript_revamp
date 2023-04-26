const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (total, cur) {
  return total + cur;
}, 0);

console.log(sum);
