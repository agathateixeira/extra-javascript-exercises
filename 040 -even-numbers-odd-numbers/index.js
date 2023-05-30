// Calculate and display the quantity of even numbers and odd numbers among 10 intergers

alert("Enter ten numbers to check for even and odd numbers among them >>");

let even = 0;
let odd = 0;

for (let i = 10; i > 0; i--) {
  let number = prompt("Number:");
  if (number % 2 === 0) {
    even++;
  } else {
    odd++;
  }
}
alert("Even numbers = " + even + "\nOdd number = " + odd);
