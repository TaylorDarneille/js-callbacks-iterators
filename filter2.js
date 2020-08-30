var misc = [3, "true", {a: 1, b: 2}, 7, [1, 2, 3], ['a', 'b', 'c'], "my favorite string", 59.09]

// Use filter to filter all strings out of the above array. 
// Don't worry about strings in the nested array (misc[5] is considered an array, not a string)

// Your code goes here
// var value = misc.filter(function(numbers){
//     return value.type===1-100;
// })

// console.log(value);

// var numOnly = function(nums){
//   return misc (integers);
// }




// let nonStrings = misc.filter(numOnly);
// console.log(numOnly);


const numOnly = misc.filter((nums) => {
    if(typeof nums !== "string"){
        return nums;
    }
});
console.log(numOnly);
