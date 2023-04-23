const myString = 'developer';

let newString = myString.charAt(0).toUpperCase() + myString.slice(1);
newString = myString[0].toUpperCase() + myString.substring(1);
newString = `${myString[0].toUpperCase()}${myString.substring(1)}`;
console.log(newString);
