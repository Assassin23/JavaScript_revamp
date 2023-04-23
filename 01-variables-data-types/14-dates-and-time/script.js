let d;

d = new Date();

d = new Date(2023, 04, 19); // May 19 2023 as month is 0-indexed
d = new Date('2023-04-19'); // Apr 19, 2023
d = new Date('2023-04-19T12:30:00'); // Apr 19, 2023 12:30:00 object

d = d.toString(); // Apr 19, 2023 12:30:00 string

d = new Date('2022-07-10'); // Can be off by a day if timezone is not set
d = new Date('07-10-2022'); // this works well

d = Date.now(); // timestamp_value number

d = new Date('2023-04-19T12:30:00');
d = d.getTime(); // timestamp of a date
d = d.valueOf();

d = new Date(1681887600000); // date from a timestamp in ms
console.log(d, typeof d);
