// Altere o programa anterior permitindo ao
// usuário informar as populações
// e as taxas de crescimento iniciais.
// Valide a entrada e
// permita repetir a operação.

let populationA = parseInt(prompt("How many inhabitants does city A has?"));
let growthRateA = parseFloat(
  prompt("What is the annual growth rate of city A? Use %)")
);
let populationB = parseInt(prompt("How many inhabitants does city B has?"));
let growthRateB = parseFloat(
  prompt("What is the annual growth rate of city B? Use %")
);
let years = 0;

growthRateA = growthRateA / 100 + 1;
growthRateB = growthRateB / 100 + 1;

if (populationA > 0 && populationB > 0) {
  while (populationA < populationB) {
    populationA *= growthRateA;
    populationB *= growthRateB;

    years++;
  }

  populationA = Math.floor(populationA);
  populationB = Math.floor(populationB);

  alert(
    "Population A: " +
      populationA +
      " inhabitants\n" +
      "Population B: " +
      populationB +
      " inhabitants\n" +
      " Years for country A to have a population greater than or equal to country B: " +
      years +
      " years"
  );
} else alert("The population must be greather than 0.");
