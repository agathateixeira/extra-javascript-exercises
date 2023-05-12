let number1 = parseFloat(prompt("Enter the first number, please: "));
let number2 = parseFloat(prompt("Enter the second number, please: "));
let operator = prompt(
  "Which one calculation type would you like to do? " +
    "\n" +
    "Addiction (+), Subtraction (-), Multiplication (*) or Division?"
);

let result = 0;
switch (operator) {
  case "+":
    result = number1 + number2;
  case "-":
    result = number1 - number2;
    break;
  case "*":
    result = number1 * number2;
  case "/":
    result = number1 / number2;
}

let evenOdd = result % 2;
if (evenOdd === 0) {
  evenOdd = "Even";
} else {
  evenOdd = "Odd";
}

let positiveNegative;
if (result >= 0) {
  positiveNegative = "Positive";
} else {
  positiveNegative = "Negative";
}

let intergerDecimal;
let roundedNumber = Math.round(result);

if (result === roundedNumber) {
  intergerDecimal = "Interger";
} else {
  intergerDecimal = "Decimal";
}

alert(
  "The calculation:  " +
    number1 +
    " " +
    operator +
    " " +
    number2 +
    " = " +
    result +
    "\n" +
    result +
    " is " +
    evenOdd +
    ", " +
    positiveNegative +
    ", and " +
    intergerDecimal
);
