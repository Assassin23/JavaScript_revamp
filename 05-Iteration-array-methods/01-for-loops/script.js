// Syntax
// for([initial Expression]; [Condition]; [Increment]){
//     CSSLayerStatementRule;
// }

for (let i = 0; i <= 10; i++) {
  console.log('Number ' + i);
}

for (let i = 0; i <= 6; i++) {
  if (i % 2) {
    console.log(i);
  } else {
    console.log('Not showing even');
  }
}

// Nest Loops
for (let i = 1; i <= 10; i++) {
  console.log('Number ' + i);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// Loop through an array
const fruits = ['apple', 'orange', 'pear'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
