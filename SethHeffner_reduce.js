// BONUS ONLY: Look up docs to read about reduce, which takes an array and distills it into a single value.





var numbers = [1, 56, 2, 4, 1, 99, 3, 5];

// Your code here!


//reduce: to find the sum of an array (has to be integers)
//part 1 of reduce = accumulator: place holder for total
//part 2 of reduce = each iteration (orignal parts of the orginal array)

// below is what the reduce funtion would look like if it was written out. 

// const reduceNum = (arr) => {
//   let total = 0;
//   for(let i = 0; i < arr.length; i++ ){
//     console.log(arr[i])
//       total += arr[i]
//   }
//   return total 
// }
// let myArr = [0, 1, 4, 6]
// console.log(reduceNum(myArr))


let sumNum = numbers.reduce((acc, val) => {
  return acc + val
})
console.log(sumNum)

// Write something that takes the above array and returns the product of all the numbers
// via multiplication



// once I understood the concept of the reduce iterator, it was easy to answer this second 
// question (if I got it right of course). I simply added a * (multiplication sign) to multiply my 
// values together instead of add them togther. 

let multNum = numbers.reduce((acc, val) => {
  return acc * val
})
console.log(multNum)

// via help from Matten in office-hours 