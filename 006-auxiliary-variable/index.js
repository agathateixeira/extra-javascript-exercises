let num1 = parseFloat(prompt("Enter the first interger number:"));
let num2 = parseFloat(prompt("Enter the second interger number:"));

let invNum1 = num2;
let invNum2 = num1;

if (num1 !== num2) {
  alert(
    "Antes: " +
      num1 +
      " AND " +
      num2 +
      "\n" +
      "Depois: " +
      invNum1 +
      " AND " +
      invNum2
  );
} else {
  alert("The numbers are equal!");
}
