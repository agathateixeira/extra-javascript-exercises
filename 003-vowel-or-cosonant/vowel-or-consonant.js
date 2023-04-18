let letter = prompt("Enter a single letter:");
if (
  letter === "a" ||
  letter === "e" ||
  letter === "i" ||
  letter === "o" ||
  letter === "u"
) {
  alert("The letter " + "'" + letter + "'" + " is a vowel");
} else {
  alert("The letter " + "'" + letter + "'" + " is a consonant");
}
