let fuel = prompt("Enter 'G' for Gasoline " + "\n" + "Enter 'E' for Ethanol");
let liters = 0;
if (fuel === "G") {
  liters = prompt("How many liters of Gasoline do you want to refuel?");
} else if (fuel === "E") {
  liters = prompt("How many liters of ethanol do you want to refuel?");
} else {
  alert("Enter 'G' or 'E'");
}

let discount = 0;
let gasolinePrice = 2.5;
let ethanolPrice = 1.9;
let value = 0;

if (fuel === "G") {
  if (liters <= 20) {
    discount = 0.96;
    value = liters * gasolinePrice * discount;
    alert(
      "Fuel = G-Gasoline" +
        "\n" +
        "Gasoline Price = " +
        gasolinePrice +
        "$ \n" +
        "Discount = 4%" +
        "\n" +
        "Liters of Gasoline = " +
        liters +
        "L \n" +
        "Total amount do be paid = " +
        value +
        "$"
    );
  } else {
    discount = 0.94;
    value = liters * gasolinePrice * discount;
    alert(
      "Fuel = G-Gasoline" +
        "\n" +
        "Gasoline Price = " +
        gasolinePrice +
        "$ \n" +
        "Discount = 6%" +
        "\n" +
        "Liters of Gasoline = " +
        liters +
        "L \n" +
        "Total amount do be paid = " +
        value +
        "$"
    );
  }
} else if (fuel === "E") {
  if (liters <= 20) {
    discount = 0.97;
    value = liters * ethanolPrice * discount;

    alert(
      "Fuel = E-Ethanol" +
        "\n" +
        "Ethanol Price = " +
        ethanolPrice +
        "$ \n" +
        "Discount = 3%" +
        "\n" +
        "Liters of Ethanol = " +
        liters +
        "L \n" +
        "Total amount do be paid = " +
        value +
        "$"
    );
  } else {
    discount = 0.95;
    value = liters * ethanolPrice * discount;

    alert(
      "Fuel = E-Ethanol" +
        "\n" +
        "Ethanol Price = " +
        ethanolPrice +
        "$ \n" +
        "Discount = 5%" +
        "\n" +
        "Liters of Ethanol = " +
        liters +
        "L \n" +
        "Total amount do be paid = " +
        value +
        "$"
    );
  }
} else {
  alert("Enter only valid informations!");
}
