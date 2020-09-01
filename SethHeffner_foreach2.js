// Use the .forEach iterator to loop over the following array of objects and say how delicious each one is.
// The output should be
// > Pizza is very delicious
// > Tacos is mostly delicious
// > Cottage Cheese is not very delicious

 // forEach: iterates through each value in an array. Everytime that I want to iterate over something use this method. 


 // this was similar to the other problem. However this time, I had to add
 // different strings to the different parts of the key-value pair in the
 // foods object provided. 
 // I did this by using test.'key name'(name) to call it, adding a sting, ('is')
 // then calling on the test.'value name' (level) and then adding another string
 // ('delicious') 

 
var foods = [
  {name: "Pizza", level: "very"},
  {name: "Tacos", level: "mostly"},
  {name: "Cottage Cheese", level: "not very"}
];

// your code here

foods.forEach((test) => {
  console.log(test.name + ' is ' + test.level + ' delicious')
})


