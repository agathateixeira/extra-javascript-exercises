//Faça um script que leia três números e mostre-os em ordem decrescente.

let num1 = parseFloat(prompt("Enter a number: "));
let num2 = parseFloat(prompt("Enter another number: "));
let num3 = parseFloat(prompt("Enter the last number: "));

if (num1 > num2 && num1 > num3 && num2 > num3) {
  alert(num1 + " - " + num2 + " - " + num3);
} else if (num1 > num2 && num1 > num3 && num3 > num2) {
  alert(num1 + " - " + num3 + " - " + num2);
} else if (num2 > num1 && num2 > num3 && num1 > num3) {
  alert(num2 + " - " + num1 + " - " + num3);
} else if (num2 > num1 && num2 > num3 && num3 > num1) {
  alert(num2 + " - " + num3 + " - " + num1);
} else if (num3 > num1 && num3 > num2 && num1 > num2) {
  alert(num3 + " - " + num1 + " - " + num2);
} else if (num3 > num1 && num3 > num2 && num2 > num1) {
  alert(num3 + " - " + num2 + " - " + num1);
} else {
  alert("The numbers need to be different!");
}
