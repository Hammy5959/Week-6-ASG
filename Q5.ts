//User Provided Age
function providedAge(age: number) {
  if (age >= 0 && age <= 12) {
    return "Person is Child";
  } else if (age >= 13 && age <= 19) {
    return "Person is Teenager";
  } else {
    return "Person is Adult";
  }
}
console.log(providedAge(7));
console.log(providedAge(16));
console.log(providedAge(22));
