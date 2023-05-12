// let dd = parseFloat(prompt("Type the day"));
// let mm = parseFloat(prompt("Type the month"));
// let yy = parseFloat(prompt("Type the day"));

// // if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
// //   alert(year + " is leap year.");
// // } else {
// //   alert(year + " isn't leap year.");
// // }

// if (dd>= 01 && dd <= 31)

//Faça um script que peça uma data no formato dd/mm/aaaa e determine se a mesma é uma data válida.

//TO be a valid date:
// 31 dias: 1, 3, 5, 7, 8, 10 e mês 12
// 30 dias: 4, 6, 9 e mês 11
// 29 dias: mês 2 em anos bissextos
// 28 dias:  mês 2 em anos não bissextos

date = prompt("Type a date in the format dd/mm/yyyy");

dateSplit = date.split("/");
let day = parseInt(dateSplit[0]);
let month = parseInt(dateSplit[1]);
let year = parseInt(dateSplit[2]);

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    if (day <= 31) {
      alert("Valid date");
    } else {
      alert("Invalid date");
    }
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    if (day <= 30) {
      alert("Valid date");
    } else {
      alert("Invalid date");
    }
    break;

  case 2:
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      if (day <= 29) {
        alert("Valid date");
      } else {
        alert("Invalid date");
      }
    } else if (day <= 28) {
      alert("Valid date");
    } else {
      alert("Invalid date");
    }
    break;
  default:
    alert("Invalid date");
    break;
}
