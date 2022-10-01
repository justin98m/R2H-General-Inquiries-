const Person = require('./person.js');

//part 4
class Programmer extends Person {
    constructor(personInfo, languages){
      super(personInfo);
      this.languages = [languages];
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
      languages.foreEach(language =>{
        console.log("\n" + language);
      })
    }
}
module.exports = Programmer;
