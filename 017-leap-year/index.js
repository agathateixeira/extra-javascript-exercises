let year = parseFloat(prompt("Type the year"));

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  alert(year + " is leap year.");
} else {
  alert(year + " isn't leap year.");
}
