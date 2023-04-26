const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNums = numbers.filter(function (number) {
  return number % 2 === 0; // - 2,4,6,8,10
});

// short version
const even = numbers.filter((number) => number % 2 === 0); // - 2,4,6,8,10

console.log(even);

const companies = [
  { name: 'Company', category: 'Retail', start: 1981 },
  { name: 'Company1', category: 'Auto', start: 1982 },
  { name: 'Company2', category: 'Auto', start: 1988 },
  { name: 'Company3', category: 'Auto', start: 1982 },
  { name: 'Company4', category: 'Retail', start: 1984 },
  { name: 'Company5', category: 'Retail', start: 1981 },
];

//  get companies from Retail

const retailCompanies = companies.filter(
  (company) => company.category === 'Retail'
);

// get ones that start in 1982
const comps = companies.filter((company) => company.start === 1982);

console.log(retailCompanies);
console.log(comps);
