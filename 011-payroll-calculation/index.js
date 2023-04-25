let perHour = parseFloat(prompt("How much do your earn per hour worked?"));
let hours = parseFloat(prompt("How many hours did you work this month?"));

let grossSalary = perHour * hours;
let INSSValue = grossSalary * 0.1;
let FGTSValue = grossSalary * 0.11;

if (grossSalary <= 900) {
  let IRPerCent = 0;
  let IRValue = grossSalary * IRPerCent;
  let totalDeductions = IRValue + INSSValue;
  let netSalary = grossSalary - totalDeductions;
  alert(
    "Gross Salary: " +
      perHour +
      " * " +
      hours +
      " : " +
      grossSalary +
      "$\n" +
      "(-) IR (0%): " +
      IRValue +
      "$\n" +
      "(-) INSS (10%): " +
      INSSValue +
      "$\n" +
      "FGTS: (11%): " +
      FGTSValue +
      "$\n" +
      "Total Deductions: " +
      totalDeductions +
      "$\n" +
      "Net Salary: " +
      netSalary +
      "$"
  );
} else if (grossSalary <= 1500) {
  IRPerCent = 0.05;
  IRValue = grossSalary * IRPerCent;
  totalDeductions = IRValue + INSSValue;
  netSalary = grossSalary - totalDeductions;
  alert(
    "Gross Salary: " +
      perHour +
      " * " +
      hours +
      " : " +
      grossSalary +
      "$\n" +
      "(-) IR (5%): " +
      IRValue +
      "$\n" +
      "(-) INSS (10%): " +
      INSSValue +
      "$\n" +
      "FGTS: (11%): " +
      FGTSValue +
      "$\n" +
      "Total Deductions: " +
      totalDeductions +
      "$\n" +
      "Net Salary: " +
      netSalary +
      "$"
  );
} else if (grossSalary <= 2500) {
  IRPerCent = 0.1;
  IRValue = grossSalary * IRPerCent;
  totalDeductions = IRValue + INSSValue;
  netSalary = grossSalary - totalDeductions;
  alert(
    "Gross Salary: " +
      perHour +
      " * " +
      hours +
      " : " +
      grossSalary +
      "$\n" +
      "(-) IR (10%): " +
      IRValue +
      "$\n" +
      "(-) INSS (10%): " +
      INSSValue +
      "$\n" +
      "FGTS: (11%): " +
      FGTSValue +
      "$\n" +
      "Total Deductions: " +
      totalDeductions +
      "$\n" +
      "Net Salary: " +
      netSalary +
      "$"
  );
} else if (grossSalary > 2500) {
  IRPerCent = 0.2;
  IRValue = grossSalary * IRPerCent;
  totalDeductions = IRValue + INSSValue;
  netSalary = grossSalary - totalDeductions;
  alert(
    "Gross Salary: " +
      perHour +
      " * " +
      hours +
      " : " +
      grossSalary +
      "$\n" +
      "(-) IR (20%): " +
      IRValue +
      "$\n" +
      "(-) INSS (10%): " +
      INSSValue +
      "$\n" +
      "FGTS: (11%): " +
      FGTSValue +
      "$\n" +
      "Total Deductions: " +
      totalDeductions +
      "$\n" +
      "Net Salary: " +
      netSalary +
      "$"
  );
} else {
  alert("Type only valid informations!");
}
