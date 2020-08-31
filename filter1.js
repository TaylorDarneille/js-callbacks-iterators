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
  if ( person.coolnessScore >20){
    return true
  }else {
    return false
    }
})

console.log(isCool) 
