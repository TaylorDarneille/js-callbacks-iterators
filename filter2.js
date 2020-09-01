var misc = [3, "true", {a: 1, b: 2}, 7, [1, 2, 3], ['a', 'b', 'c'], "my favorite string", 59.09]

// Use filter to filter all strings out of the above array. 
// Don't worry about strings in the nested array (misc[5] is considered an array, not a string)

// Your code goes here


//==================================
//filter 2
//==================================
var misc = [3, "true", {a: 1, b: 2}, 7, [1, 2, 3], ['a', 'b', 'c'], "my favorite string", 59.09]

// Use filter to filter all strings out of the above array. 
// Don't worry about strings in the nested array (misc[5] is considered an array, not a string)

// Your code goes here

const newArr2 = misc.filter(randomItem => {
  if (typeof randomItem === 'string') {
    return false
  }else {
    return true
  }
})
console.log(newArr2)

//This prompt was a little more challenging but have a general understanding. Ana and Mateen helped me understand
//the concept.