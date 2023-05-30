const number = parseInt(
  prompt("Which number do you want to see in the times table?")
);
let resultado = "";

for (let i = 1; i <= 10; i++) {
  resultado += number + " x " + i + " = " + number * i + "\n";
}
alert(resultado);
