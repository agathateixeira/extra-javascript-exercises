let strawberryKg = parseFloat(
  prompt("How many kilograms of STRAWBERRYS would you like to buy?")
);
let appleKg = parseFloat(
  prompt("How many kilograms of APPLES would you like to buy?")
);

let totalWeight = strawberryKg + appleKg;
let strawberryPrice = 2.5;
let applePrice = 1.8;

if (totalWeight > 5 && totalWeight < 8) {
  strawberryPrice = 2.2;
  applePrice = 1.5;
} else if (totalWeight >= 8) {
  strawberryPrice = 2.2 * 0.9;
  applePrice = 1.5 * 0.9;
}

let amount = strawberryKg * strawberryPrice + appleKg * applePrice;

alert(
  "RECEIPT \nStore: XYZ Market \nStrawberry: " +
    strawberryKg +
    "Kg\n" +
    "Apple: " +
    appleKg +
    "Kg \n" +
    "Total Weight (Kg): " +
    totalWeight +
    "\n" +
    "Total = $" +
    amount
);
