var people = [
	{
		name: "Bob",
		coolnessScore: 23
	},
	{
		name: "Jen",
		coolnessScore: 40
	},
	{
		name: "James",
		coolnessScore: 15.6
	},
	{
		name: "Isolde",
		coolnessScore: 17
	}
];

// (1) Write code that uses the filter function, and the below isCool function to return a list of people who are cool.

var isCool = function(person) {
	return person.coolnessScore > 20;
}

// Your code goes here

var people = [
	{
		name: "Bob",
		coolnessScore: 23
	},
	{
		name: "Jen",
		coolnessScore: 40
	},
	{
		name: "James",
		coolnessScore: 15.6
	},
	{
		name: "Isolde",
		coolnessScore: 17
	}
];
// // (1) Write code that uses the filter function, and the below isCool function to return a list of people who are cool.


// //filter: returns a subset of the original array by filtering through the orignal array based on a true/false question and stores it in a new array.
var isCool = function(person) {
	return person.coolnessScore > 20;
}

// Your code goes here

// the idea is to create a variable that contains a funtion that will use a boolean to  
//  determine whether a person meets the critera necessary to be considered cool
// this criteria is fit inside of the variable isCool.

let coolPeople = people.filter((val) => {
  return isCool(val)
})

console.log(coolPeople)

//