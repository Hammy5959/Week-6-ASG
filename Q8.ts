//Check Year Leap or not
function checkYearLeapOrNot(year: number): boolean {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 === 0);
}
var year = 2023;
console.log(checkYearLeapOrNot(year));
if (checkYearLeapOrNot(year)) {
  console.log(`${year} is leap year`);
} else {
  console.log(`${year} is not a leap year`);
}
