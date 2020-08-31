var misc = [3, "true", {a: 1, b: 2}, 7, [1, 2, 3], ['a', 'b', 'c'], "my favorite string", 59.09]

// Use filter to filter all strings out of the above array. 
// Don't worry about strings in the nested array (misc[5] is considered an array, not a string)

// Your code goes here
//Need to identify data type for each item in array and use that to determine whether to push into new array
//filter method creates a new array with all elements that pass test included
//need to define new variable to hold this array
const noStrings = misc.filter(misc => {
    if(typeof misc === 'string') {
      //evaluate whether data being evaluated is a string
        return false
      //return false to not push into new array
    }
    return true
    //otherwise we want to push data into new array
  })
  
  console.log(noStrings)
