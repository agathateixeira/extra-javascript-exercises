const zero = 0;
const one = 1;
let a = 0;
let b = 1;

let results = "";

for (let sum = 0; sum <= 500; ) {
  sum = a + b;
  results += " - " + sum;
  a = b;
  b = sum;
}
alert(zero + " - " + one + results);
