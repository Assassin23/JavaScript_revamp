// Default Params
function reg_user(user = 'Bot') {
  //   if (!user) {
  //     user = 'Bot';
  //   }
  return user + ' is registered.';
}

// console.log(reg_user('John'));
console.log(reg_user());

// Rest Params

function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5));

// obj as params

function loginUser(user) {
  return `Login successful for user ${user.name} with id ${user.id}.`;
}

const user = {
  id: 1,
  name: 'John',
};

console.log(loginUser(user));
console.log(
  loginUser({
    id: 2,
    name: ' Sarah',
  })
);
