// 18. Faça um script para um caixa eletrônico. O script deverá perguntar ao usuário a valor do saque e depois informar
//  quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais.
//  O valor mínimo é de 10 reais e o máximo de 600 reais. O script não deve se preocupar com a quantidade de notas
//   existentes na máquina.

//  Exemplo: Para sacar a quantia de 256 reais, o script fornece duas notas de 100, uma nota de 50,
//  uma nota de 5 e uma nota de 1;
//  Exemplo: Para sacar a quantia de 399 reais, o script fornece três notas de 100, uma nota de 50,
//  quatro notas de 10, uma nota de 5 e quatro notas de 1.

const amount = parseInt(prompt("How much would you like to withdraw?"));

let value = amount;
let notes100 = 0;
let notes50 = 0;
let notes20 = 0;
let notes10 = 0;
let notes5 = 0;
let notes1 = 0;

if (amount >= 10 && amount <= 600) {
  while (value >= 100) {
    notes100++;
    value -= 100;
  }
  while (value >= 50) {
    notes50++;
    value -= 50;
  }
  while (value >= 20) {
    notes20++;
    value -= 20;
  }
  while (value >= 10) {
    notes10++;
    value -= 10;
  }
  while (value >= 5) {
    notes5++;
    value -= 5;
  }
  while (value > 0) {
    notes1++;
    value -= 1;
  }
} else {
  alert("Withdraw limits: between 10 and 600 dollars");
}
alert(
  "You withdrew " +
    amount +
    " dollars." +
    "\n" +
    "You will receive: " +
    "\n" +
    notes100 +
    " bills of $100" +
    "\n" +
    notes50 +
    " bills of $50" +
    "\n" +
    notes20 +
    " bills of $20" +
    "\n" +
    notes10 +
    " bills of $10" +
    "\n" +
    notes5 +
    " bills of 5$." +
    "\n" +
    notes1 +
    " bills of 1$"
);
