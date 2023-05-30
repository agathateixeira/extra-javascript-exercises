const zero = 0;
const one = 1;
let a = 0;
let b = 1;
let sum = 0;
let results = "";
for (let i = 2; i <= 8; i++) {
  sum = a + b;
  results += " - " + sum;
  a = b;
  b = sum;
}
alert(zero + " - " + one + results);
