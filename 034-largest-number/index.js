let maxNumber = 0;

for (let i = 0; i < 5; i++) {
  let number = parseFloat(prompt("Enter a number: "));

  if (number > maxNumber) {
    maxNumber = number;
    console.log(i);
  }
}
alert("Largest Number: " + maxNumber);
