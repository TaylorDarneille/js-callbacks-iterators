
// (1) Use the .forEach iterator to loop over the following array of foods and say you like them.

// The output should be
// > "I like pizza"
// > "I like tacos"
// > "I like ice cream"
 
var foods = ["pizza", "tacos", "ice cream", "sushi"];

// your code here
const likeFood = food => console.log(`I like ${food}`)
foods.forEach(likeFood)

// Why does writing it this way add an 'undefined' at the end of the list? Too many console.logs?
// const likeFood = foods.forEach((food) => console.log(`I like ${food}`))
// console.log(likeFood)