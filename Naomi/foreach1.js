//  (1) Use the .forEach iterator to loop over the following array of foods and say you like them.

// The output should be
// > I like pizza
// > I like tacos
// > I like ice cream

var foods = [pizza, tacos, ice cream, sushi];
// The forEach method will run once for each of the elements in the array
// favorite is the name of the call back function that will run through each of the names in the array when you print in the console
foods.forEach(favorite=>{
  console.log(I like  + favorite)
})
