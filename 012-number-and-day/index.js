//10. Faça um script que leia um número e exiba o dia correspondente da semana.
// (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.

let num = parseFloat(prompt("Type a number: "));

if (num === 1) {
  alert("1-Sunday");
} else if (num === 2) {
  alert("2-Monday");
} else if (num === 3) {
  alert("3-Tuesday");
} else if (num === 4) {
  alert("4-Wednesday");
} else if (num === 5) {
  alert("5-Thursday");
} else if (num === 6) {
  alert("6-Friday");
} else if (num === 7) {
  alert("7-Saturday");
} else {
  alert("Insert a number from 1 to 7");
}
