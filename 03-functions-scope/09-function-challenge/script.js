// Challenge 1: Convert Fahrenheit - Celcius

function toCelcius(temp) {
  return ((temp - 32) * 5) / 9 + '\xB0C';
}

const getCelcius = (temp) => ((temp - 32) * 5) / 9 + '\xB0C';

console.log(toCelcius(102));
console.log(getCelcius(50));

// Challenge 2: arrow function to return min & max value

const minMax = (...numbers) => {
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers),
  };
};

console.log(minMax(1, 2, 3, 4, 5, 6));

// Challenge 3: Output Area of a rect on console given len & width

((l, b) => {
  console.log(
    `The area of a rectangle with a length of ${l} and a width of ${b} is ${
      l * b
    }`
  );
})(10, 5);
