"use strict";
//day OF the week
function dayOfTheWeek(day) {
    if (day === 1) {
        return ("Monday");
    }
    else if (day === 2) {
        return ("Tuesday");
    }
    else if (day === 3) {
        return ("Wednesday");
    }
    else if (day === 4) {
        return ("Thursday");
    }
    else if (day === 5) {
        return ("Friday");
    }
    else if (day === 6) {
        return ("Saturday");
    }
    else if (day === 7) {
        return ("Sunday");
    }
    else {
        return ("Please Enter betwwen 1-7 number");
    }
}
console.log(dayOfTheWeek(6));
