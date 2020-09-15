var foods = [
  {name: Pizza, level: very},
  {name: Tacos, level: mostly},
  {name: Cottage Cheese, level: not very}
];


foods.forEach(sentence => {
  // the call back function is called sentence and we use it to access the key and value of the object to print out desired sentence
    console.log(sentence.name +  is  + sentence.level +  delicious)
})
