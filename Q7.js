"use strict";
//Check if te given if divisible
function checkNumberDivisible(number) {
    if (number % 3 == 0 && number % 5 == 0) {
        return `${number} is divisible by both 3 or 5`;
    }
    else if (number % 5 == 0) {
        return `${number} is divisible by 5`;
    }
    else if (number % 3 == 0) {
        return `${number} is divisible by 3 or 5`;
    }
    else {
        return `${number} is not divisible by 3 or 5`;
    }
}
console.log(checkNumberDivisible(15));
