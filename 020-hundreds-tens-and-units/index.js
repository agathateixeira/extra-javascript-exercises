// let number = prompt("Enter a interger number less than 1000, please: ");
// let numberSplit = number.split("");
// let hundred = parseInt(numberSplit[0]);
// let ten = parseInt(numberSplit[1]);
// let unit = parseInt(numberSplit[2]);

// if (number < 1000) {
//   if (number.length === 2) {
//     hundred = 0;
//     ten = numberSplit[0];
//     unit = numberSplit[1];
//   } else if (number.length === 1) {
//     hundred = 0;
//     ten = 0;
//     unit = numberSplit[0];
//   }
//   alert(
//     number +
//       " = " +
//       hundred +
//       " hundreds, " +
//       ten +
//       " tens e " +
//       unit +
//       " units"
//   );
// } else {
//   alert("Enter a number less than 1000.");
// }

let number = prompt("Enter an integer number less than 1000, please: ");

if (number < 1000) {
  let hundred = 0;
  let ten = 0;
  let unit = 0;

  if (number.length === 3) {
    hundred = parseInt(number[0]);
    ten = parseInt(number[1]);
    unit = parseInt(number[2]);
  } else if (number.length === 2) {
    ten = parseInt(number[0]);
    unit = parseInt(number[1]);
  } else if (number.length === 1) {
    unit = parseInt(number[0]);
  }

  alert(
    number +
      " = " +
      hundred +
      " hundreds, " +
      ten +
      " tens, and " +
      unit +
      " units."
  );
} else {
  alert("Enter a number less than 1000.");
}
