let grade = parseFloat(prompt("Please, enter the grade from 0 to 10: "));

while (grade < 0 || grade > 10) {
  alert("Invalid Grade!");
  grade = prompt("Please, enter the grade from 0 to 10: ");
}
alert("Your grade is: " + grade);
