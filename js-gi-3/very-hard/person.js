class Person {
  //part1
  constructor(personInfo){
    this.name = personInfo.name;
    this.job = personInfo.job;
    this.age = personInfo.age;
  }
  //Part 2
  exercise(){
  console.log('You should run often');
  }
  //Part 3
  fetchJob(){
    console.log(`${this.name} is a ${this.job}`);
  }
}

  
module.exports = Person;
