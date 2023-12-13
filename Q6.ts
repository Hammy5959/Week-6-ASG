//Check Temprature and Sugges Clothes
function suggestClothes(temprature: number) {
  if (temprature < 0) {
    return "It's Freezing outside. Wear a Heavy Coat and Gloves";
  } else if (temprature < 10) {
    return "It's very cold outside. wear a warm Coat";
  } else if (temprature < 20) {
    return "It's chilly outside. wear a Light jacket or sweater";
  } else if (temprature < 30) {
    return "It's Warm outside. wear a t-shirt and shorts";
  } else {
    return "It's Hot outside. wear a t-shirt adn shorts";
  }
}
console.log(suggestClothes(17));
