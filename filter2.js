var misc = [3, "true", {a: 1, b: 2}, 7, [1, 2, 3], ['a', 'b', 'c'], "my favorite string", 59.09]
// (2) Use filter to filter all strings out of the above array.
// Your code goes here
let strings = misc.filter((val) => {
  return typeof val === 'string'
})
console.log(strings)