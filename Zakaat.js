#!  /usr/bin/env node
import inquirer from "inquirer";
let Zakaat1 = 2.5;
let MinimumAmount = 150000;
const Zakaat = await inquirer.prompt([
    {
        name: "Zakaat2",
        type: "number",
        message: "Enter the Zakaat Amount:",
    },
]);
let total = Zakaat.Zakaat2;
if (total >= MinimumAmount) {
    let calculatedZakaat = total * (Zakaat1 / 100);
    console.log("The Calculated Value of Cash:" + calculatedZakaat);
}
else {
    console.log("Not Aplicable");
}
