* fork & clone this repo
* copy/paste the code from each of the files into repl and finish the problem
* copy/paste your solution back into the file it came from 
* save the file
* `git add .`
* `git commit -m <message about which problem you finished>`
* when you're done, make a pull request with your name & your point-person's name as the PR title

# Using Iterators

Inside this folder are seven JavaScript files with different problems - two each for `map`, `forEach`, and `filter`, and one for `reduce`. 

Follow the instructions in each file and use iterators to solve each problem.
// var people = [
// 	{
// 		name: "Bob",
// 		coolnessScore: 23
// 	},
// 	{
// 		name: "Jen",
// 		coolnessScore: 40
// 	},
// 	{
// 		name: "James",
// 		coolnessScore: 15.6
// 	},
// 	{
// 		name: "Isolde",
// 		coolnessScore: 17
// 	}
// ];
//#1
// // (1) Write code that uses the filter function, and the below isCool function to return a list of people who are cool.

// var isCool = function(person) {
// 	return person.coolnessScore > 20;
// }
// const newArr = people.filter(isCool)
// console.log(newArr)
// }

//#2
// var misc = [3, "true", {a: 1, b: 2}, 7, [1, 2, 3], ['a', 'b', 'c'], "my favorite string", 59.09]
// Use filter to filter all strings out of the above array. 
// Don't worry about strings in the nested array (misc[5] is considered an array, not a string)
// const newArr = misc.filter(item => {
//   if (typeof item === "string"){
//     return false 
//     } else {
//     return true
//     }
//     })
// console.log(newArr)

//#3
// // (1) Use the .forEach iterator to loop over the following array of foods and say you like them.

// // The output should be
// // > "I like pizza"
// // > "I like tacos"
// // > "I like ice cream"
 
// var foods = ["pizza", "tacos", "ice cream", "sushi"];
// const newFoods = foods.forEach(item => {
//   console.log("I like", item)

// })
// console.log(newFoods)

//#4
// // Use the .forEach iterator to loop over the following array of objects and say how delicious each one is.
// // The output should be
// // > Pizza is very delicious
// // > Tacos is mostly delicious
// // > Cottage Cheese is not very delicious

//  var foods = [
//   {name: "Pizza", level: "very"},
//   {name: "Tacos", level: "mostly"},
//   {name: "Cottage Cheese", level: "not very"}
// ];

// Object.keys(foods).forEach((item) => 
//   console.log(`${foods[item].name} is 
//   ${foods[item].level + " delicious"}`
// ));



//#5
// Write some code using map that takes the above array of mneumonics, and returns a two dimensional array.
// For example, the 0th element of the new array should be:
// ['My', 'Very', 'Excellent', 'Mother', 'Just', 'Sent', 'Me', 'Nine', 'Pizzas']


var mneumonics = ['My Very Excellent Mother Just Sent Me Nine Pizzas', 'Please Excuse My Dear Aunt Sally', 'Every Good Boy Does Fine'];
var newMneumonics = mneumonics.map(str => {
  return str.split(" ")
})
console.log(newMneumonics)

//#6
// var phoneBook = [
//   {Abe: "111-111-1111"},
//    {Bob: "222-222-2222"},
//    {Cam: "333-333-3333"},
//    {Dan: "444-444-4444"},
//    {Ern: "555-555-5555"},
//    {Fry: "111-111-1111"},
//    {Gil: "222-222-2222"},
//    {Hal: "333-333-3333"},
//    {Ike: "444-444-4444"},
//    {Jim: "555-555-5555"},
//    {Kip: "111-111-1111"},
//    {Liv: "222-222-2222"},
//    {Mia: "333-333-3333"},
//    {Nik: "444-444-4444"},
//    {Oli: "555-555-5555"},
//    {Pam: "111-111-1111"},
//    {Qiq: "222-222-2222"},
//    {Rob: "333-333-3333"},
//    {Stu: "444-444-4444"},
//    {Tad: "555-555-5555"},
//    {Uwe: "111-111-1111"},
//    {Val: "222-222-2222"},
//    {Wil: "333-333-3333"},
//    {Xiu: "444-444-4444"},
//    {Yam: "555-555-5555"},
//    {Zed: "111-111-1111"}
//   ];

// Take the phonebook above and use map to return a new phonebook that includes a country-code that matches the rest of the phone number.
// For example, the 0th element of the new array should be {Abe: "1-111-111-1111"}

// I couldn't figure out this one, the phone number research I did was confusing. A lot of symbols and methods I havent seen, I'm not sure if 
// was looing in the right place. 



// const newPhonebook = phoneBook.map((phone) => {
//   return (phone.num + );
// })




// BONUS ONLY: Look up docs to read about reduce, which takes an array and distills it into a single value.

var numbers = [1, 56, 2, 4, 1, 99, 3, 5];
function getSum(total,num) {
return total * num
}
console.log(numbers.reduce(getSum))
//** NOTES **
//The reduce() method reduces the array to a single value.

//The reduce() method executes a provided function for each value of the array (from left-to-right).

//The return value of the function is stored in an accumulator (result/total).


// Write something that takes the above array and returns the product of all the numbers
// via multiplication
