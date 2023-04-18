let numberOne = parseFloat(prompt(" Enter a number: "));
let numberTwo = parseFloat(prompt("Enter another number"));

if (numberOne > numberTwo) {
  alert(numberOne + " is greatest than " + numberTwo);
} else if (numberTwo > numberOne) {
  alert(numberTwo + " is greatest than " + numberOne);
} else {
  alert("The numbers are equal");
}
