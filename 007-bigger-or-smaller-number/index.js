//5. Faça um script que leia três números inteiros, em seguida mostre o maior e o menor deles.

let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");
let num3 = prompt("Enter the third number: ");

if (num1 > num2 && num1 > num3 && num2 > num3) {
  alert("Bigger: " + num1 + "\n" + "Smaller: " + num3);
} else if (num1 > num2 && num1 > num3 && num3 > num2) {
  alert("Bigger: " + num1 + "\n" + "Smaller: " + num2);
} else if (num2 > num1 && num2 > num3 && num1 > num3) {
  alert("Bigger: " + num2 + "\n" + "Smaller: " + num3);
} else if (num2 > num1 && num2 > num3 && num3 > num1) {
  alert("Bigger: " + num2 + "\n" + "Smaller: " + num1);
} else if (num3 > num1 && num3 > num2 && num1 > num2) {
  alert("Bigger: " + num3 + "\n" + "Smaller: " + num2);
} else if (num3 > num1 && num3 > num2 && num2 > num1) {
  alert("Bigger: " + num3 + "\n" + "Smaller: " + num1);
} else {
  alert("The numbers need to be differents!");
}
