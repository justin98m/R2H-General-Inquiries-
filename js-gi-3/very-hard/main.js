const Person = require('./person.js');
const Programmer = require('./programmer.js');

//part 1
let justin = new Person({
  name : 'Justin',
  job : 'Dev',
  age : '24'
});
//part 7 
let josh = new Programmer(
  {
    name : 'Josh',
    job : 'Engineer',
    age : '27'
  }
  ,'Java');

  console.log(justin);
  console.log(josh);
