"use strict";
`Write a program that takes the number of units consumed by a user if it is greater
 than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if 
 greater than 500 then add 25% of tax
Where the tax amount will be calculated by the amount of bill.`;
function calculateBill(units) {
    let bill = 0;
    if (units <= 100) {
        bill = units * 5;
    }
    else if (units <= 200) {
        bill = 100 * 5 + (units - 100) * 7;
    }
    else if (units <= 500) {
        bill = 100 * 5 + 100 * 7 + (units - 200) * 10.5;
    }
    else {
        bill = 100 * 5 + 100 * 7 + 300 * 10.5 + (units - 500) * 15;
    }
    let tax = 0;
    if (bill > 500) {
        tax = bill * 0.25;
    }
    else if (bill > 200) {
        tax = bill * 0.15;
    }
    else if (bill > 100) {
        tax = bill * 0.1;
    }
    return bill + tax;
}
const units = 250;
const bill = calculateBill(units);
console.log(`The bill for ${units} units is ${bill} including tax.`);
