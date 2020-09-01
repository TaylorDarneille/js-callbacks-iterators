const newPhonebook= phoneBook.map(customer=>{
  let name= Object.keys(customer);
// object.keys prints out the name of the customers since they are the key in the object above

  let phoneNumber= customer[name];
  // The code above prints out the value of the phone number from the object
  let newRecord= {};
  newRecord[name]=phoneNumber.charAt(0) + - + phoneNumber;
  // charAt(0) replicates the character at index zero of the phone number to give us the country code
  return newRecord;

})
console.log(newPhonebook)
