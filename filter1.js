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


//==============================
// //filter 1 question
//==============================
// // Your code goes here

// var misc = [3, "true", {a: 1, b: 2}, 7, [1, 2, 3], ['a', 'b', 'c'], "my favorite string", 59.09]

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

var isCool = function(person) {

  return person.coolnessScore > 20;
}
// Your code goes here

//const newArr = people.filter(isCool)


 const newArr = people.filter((person) => {
      return person.coolnessScore > 20
 })

 console.log(newArr)
 //I was able to understand this more with the help of Mateen and Seth.