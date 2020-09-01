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

// forEach: iterates through each value in an array. Everytime that I want to iterate over something use this method.

var isCool = function(person) {
	return person.coolnessScore > 20;
}

// Your code goes here
// the idea is to create a variable that contains a funtion that will  
//  determine whether a person meets the critera necessary to be considered cool
// this criteria is fit inside of the variable isCool

let coolPeople = people.filter((val) => {
  return isCool(val)
})

console.log(coolPeople)

//