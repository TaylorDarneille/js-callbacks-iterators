
// (1) Use the .forEach iterator to loop over the following array of foods and say you like them.

// The output should be
// > "I like pizza"
// > "I like tacos"
// > "I like ice cream"
 
var foods = ["pizza", "tacos", "ice cream", "sushi"];


// // your code here
let i = 0
const iLike = foods.forEach(function(food) {
  console.log("I like " + foods[i])
  i++;
})