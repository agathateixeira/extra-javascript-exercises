//8. As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para
//desenvolver um script que calculará os reajustes.
//Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
//salários até R$ 280,00 (incluindo) : aumento de 20%
//salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
//salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
//salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
//o salário antes do reajuste;
//o percentual de aumento aplicado;
//o valor do aumento;
//o novo salário, após o aumento.

let currentSalary = parseFloat(prompt(" What's your current salary?"));
let percentageApplied = 0;
let increaseValue = 0;
let newSalary = 0;

if (currentSalary < 280) {
  percentageApplied = 0.2;
  increaseValue = currentSalary * percentageApplied;
  newSalary = currentSalary + increaseValue;
  alert(
    "Current Salary: " +
      currentSalary +
      "\n" +
      "Percentage increase applied: 20%\n" +
      "Value of the Increase: " +
      increaseValue +
      "\n" +
      "New Salary: " +
      newSalary
  );
} else if (currentSalary >= 280 && currentSalary < 700) {
  percentageApplied = 0.15;
  increaseValue = currentSalary * percentageApplied;
  newSalary = currentSalary + increaseValue;
  alert(
    "Current Salary: " +
      currentSalary +
      "\n" +
      "Percentage increase applied: 15%\n" +
      "Value of the Increase: " +
      increaseValue +
      "\n" +
      "New Salary: " +
      newSalary
  );
} else if (currentSalary >= 700 && currentSalary < 1500) {
  percentageApplied = 0.1;
  increaseValue = currentSalary * percentageApplied;
  newSalary = currentSalary + increaseValue;
  alert(
    "Current Salary: " +
      currentSalary +
      "\n" +
      "Percentage increase applied: 10%\n" +
      "Value of the Increase: " +
      increaseValue +
      "\n" +
      "New Salary: " +
      newSalary
  );
} else if (currentSalary >= 1500) {
  percentageApplied = 0.05;
  increaseValue = currentSalary * percentageApplied;
  newSalary = currentSalary + increaseValue;
  alert(
    "Current Salary: " +
      currentSalary +
      "\n" +
      "Percentage increase applied: 5%\n" +
      "Value of the Increase: " +
      increaseValue +
      "\n" +
      "New Salary: " +
      newSalary
  );
} else {
  alert("Type a valid information!");
}
