// Use the .forEach iterator to loop over the following array of objects and say how delicious each one is.
// The output should be
// > Pizza is very delicious
// > Tacos is mostly delicious
// > Cottage Cheese is not very delicious

 var foods = [
  {name: "Pizza", level: "very"},
  {name: "Tacos", level: "mostly"},
  {name: "Cottage Cheese", level: "not very"}
];

// your code here

for(let i = 0; i < foods.length; i++) {
   console.log(foods[i].name, "is " + foods[i].level + " delicious")
}
foods.forEach(function(food) {

})