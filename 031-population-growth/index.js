let populationA = 80000;
let growthRateA = 1.03;
let populationB = 200000;
let growthRateB = 1.015;
let years = 0;

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
