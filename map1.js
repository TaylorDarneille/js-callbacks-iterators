
// Write some code using map that takes the above array of mneumonics, and returns a two dimensional array.
// For example, the 0th element of the new array should be:
// ['My', 'Very', 'Excellent', 'Mother', 'Just', 'Sent', 'Me', 'Nine', 'Pizzas']

// Your code here!

var twoDim = (dim) => {
    return {
      newArr: dim.split(' ')
      
  }
  }
  console.log(twoDim);
  
  
  var yesSir = mneumonics.map(twoDim);
  
  console.log(yesSir);