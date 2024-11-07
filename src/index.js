const firstNumber = +prompt('Enter your first number');
const operation = prompt(
  'Enter your operation: addition (+), subtraction (-), multiplication (*), division (/) or exponentiation (**)',
);
const secondNumber = +prompt('Enter your second number');
let result;
let roundNumber;
let roundResult;

if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
  if (operation === '+') {
    result = firstNumber + secondNumber;
  } else if (operation === '-') {
    result = secondNumber - firstNumber;
  } else if (operation === '*') {
    result = firstNumber * secondNumber;
  } else if (operation === '/') {
    result = firstNumber / secondNumber;
  } else if (operation === '**') {
    result = firstNumber ** secondNumber;
  } else {
    alert('You entered an invalid operation!');
  }
} else {
  alert('You entered an invalid value!');
}

if (
  !isNaN(firstNumber) &&
  !isNaN(secondNumber) &&
  (operation === '+' ||
    operation === '-' ||
    operation === '*' ||
    operation === '/' ||
    operation === '**')
) {
  const isNeedToRound = confirm('Would you like to round the result?');
  if (isNeedToRound) {
    roundNumber = prompt(
      'How many digits should there be after the decimal point?',
    );
    roundResult = result.toFixed(roundNumber);
    alert(roundResult);
  } else {
    alert(result);
  }
}
