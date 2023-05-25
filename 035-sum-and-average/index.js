let number = 0;
let sum = 0;
let average = 0;

for (i = 0; i < 5; i++) {
  number = prompt("Enter a number:");
  sum += parseFloat(number);
  average = sum / 5;
}
alert("Sum = " + sum + "\nAverage = " + average);
