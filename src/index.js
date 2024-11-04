const firstNumber = +prompt('Enter your first number');
const operation = prompt(
  'Enter your operation: addition (+), subtraction (-), multiplication (*), division (/) or exponentiation (**)',
);
const secondNumber = +prompt('Enter your second number');
let result;
let roundNumber;
let roundResult;

if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
  const isNeedToRound = confirm('Would you like to round the result?');
  if (operation === '+') {
    result = firstNumber + secondNumber;
    if (isNeedToRound) {
      roundNumber = prompt(
        'How many digits should there be after the decimal point?',
      );
      roundResult = result.toFixed(roundNumber);
      alert(roundResult);
    } else {
      alert(result);
    }
  } else if (operation === '-') {
    result = secondNumber - firstNumber;
    if (isNeedToRound) {
      roundNumber = prompt(
        'How many digits should there be after the decimal point?',
      );
      roundResult = result.toFixed(roundNumber);
      alert(roundResult);
    } else {
      alert(result);
    }
  } else if (operation === `*`) {
    result = firstNumber * secondNumber;
    if (isNeedToRound) {
      roundNumber = prompt(
        'How many digits should there be after the decimal point?',
      );
      roundResult = result.toFixed(roundNumber);
      alert(roundResult);
    } else {
      alert(result);
    }
  } else if (operation === `/`) {
    result = firstNumber / secondNumber;
    if (isNeedToRound) {
      roundNumber = prompt(
        'How many digits should there be after the decimal point?',
      );
      roundResult = result.toFixed(roundNumber);
      alert(roundResult);
    } else {
      alert(result);
    }
  } else if (operation === `**`) {
    result = firstNumber ** secondNumber;
    if (isNeedToRound) {
      roundNumber = prompt(
        'How many digits should there be after the decimal point?',
      );
      roundResult = result.toFixed(roundNumber);
      alert(roundResult);
    } else {
      alert(result);
    }
  } else {
    alert('You entered invalid operation!');
  }
} else {
  alert('You entered an invalid value!');
}
