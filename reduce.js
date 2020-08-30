

// BONUS ONLY: Look up docs to read about reduce, which takes an array and distills it into a single value.

var numbers = [1, 56, 2, 4, 1, 99, 3, 5];

// Your code here!

// Write something that takes the above array and returns the product of all the numbers
// via multiplication
// const nums = [1,2,3,4];
// const add = (total, new) => {
//   return total + new;
// };

// var multiplication = (numbers)  => {
//   return total + new
// };
// var product = numbers.reduce(multiplication);
// console.log(multiplication);

// array.reduce(function(product, value) { 
//   return product * value; });

let product = numbers.reduce ((a,b)=> {
  return a * b;
});
console.log(product)

//Im not understanding why a and b work in this scenario. how does javascript know that a * b means multiply all the integers in the array?
