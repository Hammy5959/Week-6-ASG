//Calculates The Percentage
function calculatesThePercentage(num1: number, num2: number): string {
  return ((num1 / num2) * 100).toFixed(2) + "%";
}
console.log(calculatesThePercentage(7, 10));
