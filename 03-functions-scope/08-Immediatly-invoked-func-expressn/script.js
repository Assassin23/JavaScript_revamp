// const user = 'Jim'; - gives error as user is declared in script1
(function () {
  const user = 'Jim';
  console.log(user);

  const hello = () => console.log('Hello');
  hello();
})();

// hello(); - gives error as not in scope

(function (name) {
  console.log('Hello ' + name);
})('Aditya');
