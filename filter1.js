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

// // Your code goes here
// people.filter(function(value){
//   return coolnessScore <20;
// })


// let coolnessScore = people.filter(function(cool) {
//   return cool > 20;
// });

// console.log(coolList)


// var numbers = [1, 3, 6, 8, 11];

// var lucky = numbers.filter(function(number) {
//   return number > 7;
// });

let coolPeople = people.filter(isCool);
console.log(isCool);
