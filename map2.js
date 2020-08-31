 const newPhonebook= phoneBook.map(function(customer){
  let name= Object.keys(customer);
  let phoneNumber= customer[name];
  let newRecord= {};
  newRecord[name]=phoneNumber.charAt(0) + - + phoneNumber;
  return newRecord;

})
console.log(newPhonebook)
