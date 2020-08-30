// BONUS ONLY: Look up docs to read about reduce, which takes an array and distills it into a single value.

var numbers = [1, 56, 2, 4, 1, 99, 3, 5];



// Write something that takes the above array and returns the product of all the numbers
// via multiplication


// Your code here!

const multiplied = numbers.reduce((total, num) => {
  return total * num;
});

console.log(multiplied);