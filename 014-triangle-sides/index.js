const side1 = parseFloat(prompt("Type the length of side 1 of the triangle"));
const side2 = parseFloat(prompt("Type the length of side 2 of the triangle"));
const side3 = parseFloat(prompt("Type the length of side 3 of the triangle"));

let triangleType = "";

if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
  if (side1 === side2 && side1 === side3 && side2 === side3) {
    triangleType = "Equilátero";
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    triangleType = "Isósceles";
  } else {
    triangleType = "Escaleno";
  }
} else {
  alert(" The values informated can't form a triangle");
}
alert("The tiangle is " + triangleType + " type.");
