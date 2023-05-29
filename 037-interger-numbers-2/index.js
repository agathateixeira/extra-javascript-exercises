// Create a program that receives two integers numbers and
// generates the integers within the range defined by them.

let number1 = parseInt(prompt("Enter a interger number: "));
let number2 = parseInt(prompt("Enter another interger number:"));
let result = "";

if (number1 >= number2) {
  for (let i = number2 + 1; i < number1; i++) {
    result += i + " - ";
  }
  alert(
    "Interger number between " + number2 + " and " + number1 + ": \n" + result
  );
} else if (number2 >= number1) {
  for (let i = number1 + 1; i < number2; i++) {
    result += i + " - ";
  }
  alert(
    "Interger number between " + number1 + " and " + number2 + ":\n" + result
  );
} else {
  alert("Enter only valid numbers");
}
