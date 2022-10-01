//obect declared within array
let student = [
  {
    fName : 'Joe',
    lName : 'Schmoe',
    age: 18
  },
  {
    fName : 'Tyler',
    lName : 'Joyce',
    age: 19
  },
  {
    fName : 'Mary',
    lName : 'lilLamb',
    age: 20
  }
]

console.log("Student 2 Introduction: \n\n");
//Call properties of the second array value
console.log(`My name is ${student[1].fName} ${student[1].lName}` +
` and I am ${student[1].age} years old`);
