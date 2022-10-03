function generatePII(){
  //pii cannot be accessed outside function due to let
  let pii = {
    name : "Joe Schmoe",
    ssn: '049-49-9321'
  }
  //returns the name to the caller
  function getName(){
    return pii.name;
  }
  //calles get name as a default behavior to utilize the closur
  return getName();
}

console.log(generatePII());
