//3. Faça um script que leia três números inteiros e mostre o maior deles.
let firstNumber = parseFloat(prompt("Enter the first number"));
let secondNumber = parseFloat(prompt("Enter the second number"));
let thirdNumber = parseFloat(prompt("Enter the third number"));

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
  alert("The greatest number is: " + firstNumber);
} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
  alert("The greatest number is: " + secondNumber);
} else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
  alert("The greatest number is: " + thirdNumber);
} else {
  alert("Enter different numbers!");
}
