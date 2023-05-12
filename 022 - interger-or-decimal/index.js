let number = parseFloat(prompt("Enter a number to be verificated: "));
let roundedNumber = Math.round(number);

if (number === roundedNumber) {
  alert("The number is Interger.");
} else {
  alert("The number is Decimal.");
}
