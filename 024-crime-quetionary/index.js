// 21. Faça um script que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
//     "Telefonou para a vítima?"
//     "Esteve no local do crime?"
//     "Mora perto da vítima?"
//     "Devia para a vítima?"
//     "Já trabalhou com a vítima?"
//     O script deve no final emitir uma classificação sobre a
//     participação da pessoa no crime.
//     Se a pessoa responder positivamente a
//     2 questões ela deve ser classificada como "Suspeita",
//     entre 3 e 4 como "Cúmplice"
//     e 5 como "Assassino".
//     Caso contrário, ele será classificado como "Inocente".

alert("Answer the questions with 'yes' or 'no'");
let classification = 0;

let answer = prompt("Did you  call the victim?");
if (answer === "yes") {
  classification++;
}
answer = prompt("Were you at the crime scene?");
if (answer === "yes") {
  classification++;
}
answer = prompt("Do you leave near the victim?");
if (answer === "yes") {
  classification++;
}
answer = prompt("Did you owe money to the victim?");
if (answer === "yes") {
  classification++;
}
answer = prompt("Have you ever worked with the victim?");
if (answer === "yes") {
  classification++;
}
if (classification < 2) {
  alert("Classification: " + classification + " - Inocent");
} else if (classification === 2) {
  alert("Classification: " + classification + " -  Suspect ");
} else if (classification === 3 || classification === 4) {
  alert("Classification: " + classification + " - Accomplice");
} else if (classification === 5) {
  alert("Classification: " + classification + " - Murderer");
} else {
  alert("Just answer de questions with 'yes' or 'no'");
}
