
// (1) Use the .forEach iterator to loop over the following array of foods and say you like them.

// The output should be
// > "I like pizza"
// > "I like tacos"
// > "I like ice cream"
 
var foods = ["pizza", "tacos", "ice cream", "sushi"];

// your code here

var foods = ["pizza", "tacos", "ice cream", "sushi"];


let favFoods = foods.forEach((val) => {
  return "I like " + val
})
console.log(favFoods)