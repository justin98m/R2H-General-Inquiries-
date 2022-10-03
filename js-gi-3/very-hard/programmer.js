//import person class from person file
const Person = require('./person.js');

//part 4
class Programmer extends Person {
    constructor(personInfo, languages){
      super(personInfo);
      this.languages = languages;
      this.busy = true;
    }
    //part 5
    completeTask(){
      this.busy = false;
    }
    acceptNewTask(){
      this.busy = true;
    }
    //part 6
    offerNewTask(){
      if(this.busy){
        console.log(`${this.name} Can't accept tasks at the moment`);
      } else {
        console.log(`${this.name} can accept tasks at the moment `);
      }
    }
    //part 7
    learnLanguage(language){
      this.languages.push(language);

    }
    listLanguages(){
      console.log(`${this.name} knows the following programming languages`);
      this.languages.forEach(language =>{
        console.log(language);
      })
    }
}
//part 1
let justin = new Person({
  name : 'Justin',
  job : 'Developer',
  age : 25
});
//part 7
let josh = new Programmer(
  {
    name : 'Josh',
    job : 'Front End Developer',
    age : 27,
  },
    ['css','HTML','javaScript']
  );
let mike = new Programmer(
  {
    name : 'Michael',
    job : 'Backend Developer',
    age: 25,
  },
  ['javaScript','Python']
);
let jimi = new Programmer(
{
  name : 'Jimi',
  job: 'Application Developer',
  age : 47,
},
['swift','css']
);
module.exports = {
  justin,
  josh,
  mike,
  jimi
};
