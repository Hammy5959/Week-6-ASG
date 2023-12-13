"use strict";
//Celsius to Fahrenheit
function celsiusToFahrenheit(celcius) {
    return (celcius * 9) / 5 + 32;
}
//Fahrenheit to Celcius
function fahrenheitToCelcius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}
console.log(celsiusToFahrenheit(0)); //32
console.log(fahrenheitToCelcius(32)); //0
