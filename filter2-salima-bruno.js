var misc = [3, "true", {a: 1, b: 2}, 7, [1, 2, 3], ['a', 'b', 'c'], "my favorite string", 59.09]

// Use filter to filter all strings out of the above array. 
// Don't worry about strings in the nested array (misc[5] is considered an array, not a string)

// Your code goes here
const stringArr = misc.filter(item => { 
    if (typeof item === 'string') { // typeof needs it in quotes like 'string' 'number'
      return false // false because we do NOT want strings. so filter can filter this out
    } else {
      return true
    }
  })
  console.log(stringArr) // log function 