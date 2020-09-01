// Use the .forEach iterator to loop over the following array of objects and say how delicious each one is.
// The output should be
// > Pizza is very delicious
// > Tacos is mostly delicious
// > Cottage Cheese is not very delicious

 var foods = [
  {name: "Pizza", level: "very"},
  {name: "Tacos", level: "mostly"},
  {name: "Cottage Cheese", level: "not very"}
];

// your code here
//in this forEach method we write the function first and then use it as a callback function when we use the forEach method at the end 
function putinPlace(foodsValue1){
  //access values of object with Object.values(currentValue parameter)
  let newArr= Object.values(foodsValue1);
  //console.log(Object.values(foodsValue1));
  //puts 'delicious' at the end of the array 
  newArr.push('delicious');
  //this function will insert one element, that you write when calling the function, into the array that you specify. Takes in 3 parameters, the array you want the function to be used on, the index where you want your element placed, and the element you wish to insert

  //turns out you don't need a function to do this, you can do it by calling splice on the array. But both methods work, could be useful down the line. 
  // function insertAt(array, index, element){
  //   //array splice is used to change the array, here were adding an element at index 1, 0 indicated the amount of elements to remove, and 'is' is the element to add to the array
  //   array.splice(1, 0, 'is');
  // }
  // insertAt(newArr, 1, 'is');
  newArr.splice(1, 0, 'is');
  //console.log(newArr);
  let print=newArr.join(' ');
  console.log(print);
}

//putinPlace is the callback function to be run for each element in the foods array
foods.forEach(putinPlace);
