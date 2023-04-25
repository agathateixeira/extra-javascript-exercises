const grade1 = parseFloat(prompt("Type your first grade"));
const grade2 = parseFloat(prompt("Type your first grade"));

let gpa = (grade1 + grade2) / 2;
let concept = "";
let studentStatus = "";

if (gpa >= 9 && gpa <= 10) {
  concept = "A";
  studentStatus = "Approved";
} else if (gpa >= 7.5 && gpa <= 8.9) {
  concept = "B";
  studentStatus = "Approved";
} else if (gpa >= 6 && gpa <= 7.4) {
  concept = "C";
  studentStatus = "Approved";
} else if (gpa >= 4 && gpa <= 5.9) {
  concept = "D";
  studentStatus = "Not Passed";
} else if (gpa >= 0 && gpa <= 3.9) {
  concept = "E";
  studentStatus = "Not Passed";
} else {
  alert("Type a number between 0 and 10");
}

alert(
  "Grade 1: " +
    grade1 +
    "\n" +
    "Grade 2: " +
    grade2 +
    "\n" +
    "GPA: " +
    gpa +
    "\n" +
    "Concept: " +
    concept +
    "\n" +
    "Status: " +
    studentStatus
);
