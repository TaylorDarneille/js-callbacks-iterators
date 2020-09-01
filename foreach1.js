
// (1) Use the .forEach iterator to loop over the following array of foods and say you like them.

// The output should be
// > "I like pizza"
// > "I like tacos"
// > "I like ice cream"
 
var foods = ["pizza", "tacos", "ice cream", "sushi"];

// your code here

//using the function keyword because we are writing the code in an anon function
//foodsValue is the current value in the array as we ~loop through it from the forEach()
foods.forEach(function(foodsValue){
  console.log('I like', foodsValue)
});
