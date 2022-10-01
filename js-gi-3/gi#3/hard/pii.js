//make object pii
  //contains
    //public name
    //private ssn
function generatePII(){
  let pii = {
    name : "Joe Schmoe",
    ssn: '049-49-9321'
  }
  function getName(){
    return pii.name;
  }
  return getName();
}

console.log(generatePII());
