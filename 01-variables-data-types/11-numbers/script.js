const num = 5; // 5, number

const num1 = new Number(5); // Number(5) object
// access object value by valueOf()

let x;

x = num1.toString(); // 5 string

x = num1.toString().length;

x = num1.toFixed(2); // 5.00 string

x = num1.toPrecision(2); // 5.0 string

x = num1.toLocaleString('ar-EG'); // 5 in local language string

x = Number.MAX_VALUE; // <largest number possible> number
x = Number.MIN_VALUE; // <smallest number possible> number
output = x;
console.log(output, typeof output);
