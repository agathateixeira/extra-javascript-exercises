//Create a program that prints the numbers from 1 to 20, one below the other.

for (let number = 1; number <= 20; number++) {
  console.log(number);
}

//  Then modify the program to display the numbers side by side.
let numbers = 0;
for (let i = 1; i <= 20; i++) {
  numbers += i + " ";
}
console.log(numbers);
