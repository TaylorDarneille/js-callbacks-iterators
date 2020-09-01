var misc = [3, "true", {a: 1, b: 2}, 7, [1, 2, 3], ['a', 'b', 'c'], "my favorite string", 59.09]

// Use filter to filter all strings out of the above array. 
// Don't worry about strings in the nested array (misc[5] is considered an array, not a string)

// Your code goes here

var misc = [3, "true", {a: 1, b: 2}, 7, [1, 2, 3], ['a', 'b', 'c'], "my favorite string", 59.09]

// (2) Use filter to filter all strings out of the above array.

// Your code goes here


let strings = misc.filter((val) => {
  return typeof val === 'string'
})
console.log(strings)

// Your code goes here
// the idea is to create a variable that contains a funtion that will  
// iterate through the misc array and determine whether a the variable is a string or not
// the typeof method is used to check.