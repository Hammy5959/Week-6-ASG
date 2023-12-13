"use strict";
//Convert given number days into weeks
function convertDaysToWeeksAndDays(days) {
    var weeks = Math.floor(days / 7);
    var remainingDays = days % 7;
    return `${weeks} Weeks and ${remainingDays} days`;
}
console.log(convertDaysToWeeksAndDays(45));
