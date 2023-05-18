// Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Sexo: 'f' ou 'm';
// Estado Civil: 's', 'c', 'v', 'd';
// Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length

let fullName = prompt("Enter your name: ");
while (fullName.length <= 3) {
  alert("Use a minimum of 3 characters");
  fullName = prompt("Enter your name: ");
}
alert("Name: " + fullName);

let age = parseInt(prompt("Enter your age: "));
while (age < 0 || age > 150) {
  alert("Enter for 0 to 150");
  age = prompt("Enter your age: ");
}
alert("Age: " + age);

let salary = prompt("Enter your salary: ");
while (salary <= 0) {
  alert("Please enter a value greater than $0.");
  salary = prompt("Enter your salary: ");
}
alert("Salary: $" + salary);

let gender = prompt(
  "Enter your gender: \n" +
    "m-male\n" +
    "f-female\n" +
    "nb-non-binary\n" +
    "t-transgender\n" +
    "o-other"
);

while (
  gender !== "m" &&
  gender !== "f" &&
  gender !== "nb" &&
  gender !== "t" &&
  gender !== "o"
) {
  alert("If you feel comfortable, please use one of the described options ");
  gender = prompt("Enter your gender if you want: ");
}
alert("Gender: " + gender);

let maritalStatus = prompt(
  "Enter your marital status: \n" +
    "s-single\n" +
    "m-married\n" +
    "d-divorced\n" +
    "w-widowed"
);

while (
  maritalStatus !== "s" &&
  maritalStatus !== "m" &&
  maritalStatus !== "d" &&
  maritalStatus !== "w"
) {
  alert("Enter a valid option!");
  maritalStatus = prompt(
    "Enter your marital status: \n" +
      "s-single\n" +
      "m-married\n" +
      "d-divorced\n" +
      "w-widowed"
  );
}
alert("Marital Status: " + maritalStatus);

alert(
  "Name: " +
    fullName +
    "\nAge: " +
    age +
    "\nSalary: $" +
    salary +
    "\nGender: " +
    gender +
    "Marital Status: " +
    maritalStatus
);
