
let meatOption = prompt(
  "Enter only ONE meat option: \n" +
    "Double Filet \n" +
    "Rump Steak \n" +
    "Sirloin"
);

let meatKg = parseFloat(
  prompt("How many kilograms of " + meatOption + " do you want?")
);
let meatPrice = 4.9;

if (meatKg <= 5) {
  if (meatOption === "Rump Steak") {
    meatPrice++;
  } else if (meatOption === "Sirloin") {
    meatPrice += 2;
  }
} else if (meatKg > 5) {
  if (meatOption === "DoubleFilet") {
    meatPrice += 0.9;
  } else if (meatOption === "Rump Steak") {
    meatPrice += 1.9;
  } else if (meatOption === "Sirloin") {
    meatPrice += 2.9;
  } else {
    alert("Enter only valid informations!2");
  }
} else {
  alert("Enter only valid informations!3");
}

let tabajaraCard = prompt(
  "Are you going to pay with Tabajara Card?" + "Enter with 'yes' or 'no'"
);

let total = meatKg * meatPrice;
let tabajaraDiscount = "0%";

if (tabajaraCard === "yes") {
  total *= 0.95;
  tabajaraDiscount = "5%";
}

alert(
  "BUTCHER SHOP \n" +
    "Meat Option: " +
    meatOption +
    "\n" +
    "Kg Total: " +
    meatKg +
    "\n" +
    "Price/Kg: " +
    meatPrice.toFixed(2) +
    "\n" +
    "Tabajara Discount: " +
    tabajaraDiscount +
    "\n" +
    "Total: $" +
    total +
    "\n" +
    "\n" +
    "Thank you for shopping at Butcher Shop!"
);
