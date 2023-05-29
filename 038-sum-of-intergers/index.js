// Create a program that receives two integers and sums the integers within the range between them

let number1 = parseInt(prompt("Enter a interger number: "));
let number2 = parseInt(prompt("Enter another interger number:"));
let result = 0;

if (number1 >= number2) {
  for (let i = number2 + 1; i < number1; i++) {
    result += i;
  }
  alert(
    "The sum result between " +
      number2 +
      " and " +
      number1 +
      " is = \n" +
      result
  );
} else if (number2 >= number1) {
  for (let i = number1 + 1; i < number2; i++) {
    result += i;
  }
  alert(
    "The sum of interger number between " +
      number1 +
      " and " +
      number2 +
      " is =\n" +
      result
  );
} else {
  alert("Enter only valid numbers");
}
