// // (1) Write code that uses the filter function, and the below isCool function to return a list of people who are cool.

 var people = [
 	{
		name: Bob,
		coolnessScore: 23
	},
	{
		name: Jen,
		coolnessScore: 40
	},
	{
		name: James,
		coolnessScore: 15.6
	},
	{
		name: Isolde,
		coolnessScore: 17
	}
];

const isCool = people.filter(person=>{
  // person is the name of the callback function
  if ( person.coolnessScore >20){
    // we access the coolness score by calling the function at the key of the object that we would like to compare
    return true
  }else {
    return false
    }
})

console.log(isCool)
