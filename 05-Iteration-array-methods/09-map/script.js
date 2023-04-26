const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers);

const companies = [
  { name: 'Company', category: 'Retail', start: 1981 },
  { name: 'Company1', category: 'Auto', start: 1982 },
  { name: 'Company2', category: 'Auto', start: 1988 },
  { name: 'Company3', category: 'Auto', start: 1982 },
  { name: 'Company4', category: 'Retail', start: 1984 },
  { name: 'Company5', category: 'Retail', start: 1981 },
];

const compNames = companies.map((company) => company.name);
console.log(compNames);

const compInfo = companies.map((company) => {
  return { name: company.name, category: company.category };
});
console.log(compInfo);

// Chain map methods

const sqranddouble = numbers.map((sqr) => sqr ** 2).map((number) => number * 2);
const evenanddouble = numbers
  .filter((even) => even % 2 === 0)
  .map((number) => number * 2);

console.log(sqranddouble);
console.log(evenanddouble);
