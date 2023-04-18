// Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:

//     A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
//     A mensagem "Reprovado", se a média for menor do que sete;
//     A mensagem "Aprovado com Distinção", se a média for igual a dez.

let grade1 = parseFloat(prompt("Enter your first grade:"));
let grade2 = parseFloat(prompt("Now, enter your second grade:"));
let average = (grade1 + grade2) / 2;

if (average >= 0 && average >= 7 && average <= 10) {
  alert("You are APPROVED");
} else if (average < 7) {
  alert("You aren't APPROVED");
} else if (average === 10) {
  alert("Approved with DISTICTION");
} else {
  alert("Enter a valid grade!");
}
