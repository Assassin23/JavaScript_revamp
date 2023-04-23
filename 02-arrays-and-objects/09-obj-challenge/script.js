const library = [
  {
    title: 'Kafka On the Shore',
    author: 'H. Murakami',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'A Man called Ove',
    author: 'Fredrik Backman',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Gunahon Ka Devta',
    author: 'Dharamvir Bharti',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library.forEach((book) => {
  book.status.read = true;
});

const { title: firstBook } = library[0];

console.log(firstBook);

const str = JSON.stringify(library);

console.log(str);
