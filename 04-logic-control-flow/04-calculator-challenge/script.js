function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = 'Invalid Operator';
  }

  console.log(result);
}

calculator(3, 4, '+');
calculator(3, 4, '-');
calculator(3, 4, '*');
calculator(3, 4, '/');
calculator(3, 4, '&');
