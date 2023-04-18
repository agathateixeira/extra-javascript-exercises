//7. Faça um script que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno.
// Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.

const shift = prompt(
  "Which shift do you study?\n" +
    "Type \n" +
    "'M' for Morning \n" +
    "'A' for Afternoon\n" +
    "'N' for Night"
);

if (shift === "M") {
  alert("Good Morning! :)");
} else if (shift === "A") {
  alert("Good Afternoon! :)");
} else if (shift === "N") {
  alert("Good Night! :)");
} else {
  alert("Invalid Value");
}
