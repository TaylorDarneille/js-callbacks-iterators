
// (1) Use the .forEach iterator to loop over the following array of foods and say you like them.

// The output should be
// > "I like pizza"
// > "I like tacos"
// > "I like ice cream"
 
var foods = ["pizza", "tacos", "ice cream", "sushi"];

// your code here

// forEach: iterates through each value in an array. Everytime that I want to iterate over something use this method. 

// the idea was to create a new variable called favFoods that would store the function
// necessary to iterate through the foods variable. 
// This forEach function added "I like" to the beginning of each string in the original
// array. This was done by adding 'I like" + val 


let favFoods = foods.forEach((val) => {
  return "I like " + val
})
console.log(favFoods)