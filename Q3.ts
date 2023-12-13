//Convert given number days into weeks
function convertDaysToWeeksAndDays(days: number) {
  var weeks = Math.floor(days / 7);
  var remainingDays = days % 7;
  return `${weeks} Weeks and ${remainingDays} days`;
}
console.log(convertDaysToWeeksAndDays(45));
