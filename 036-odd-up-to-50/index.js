//Create a program that prints on the screen only the odd numbers between 1 and 50.

let odd = "";

for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    odd += i + " - ";
  }
}
alert("The odd numbers between 1 and 50 are: \n" + odd);
