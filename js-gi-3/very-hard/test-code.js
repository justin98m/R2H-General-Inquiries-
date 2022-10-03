
//import instances from programmer file
const programmers = require('./programmer.js');

let justin = programmers.justin;
let josh = programmers.josh;
let mike = programmers.mike;
let jimi = programmers.jimi;

function main(){
  justin.fetchJob();//Developer
  justin.exercise();//Justin should run more often
console.log('='.repeat(25));
  josh.fetchJob();//josh is a Front End Developer
  josh.exercise();//Josh should run more often
console.log('='.repeat(25));
  mike.fetchJob();//Michael is a Backend Developer
  jimi.fetchJob();//Jimi is a application Developer
console.log('='.repeat(25));
  josh.offerNewTask();//josh cant accept task
  josh.learnLanguage('C++');//add c++
  josh.listLanguages();//Javascript,css,html,c++
  console.log('='.repeat(25));
  mike.listLanguages();//javaScript python
  mike.offerNewTask();//Michael cant take tasks
  mike.completeTask();//busy now false
  mike.offerNewTask();//Michael can take task
  console.log('='.repeat(25));
  jimi.listLanguages();//swift css
  jimi.learnLanguage('Java');//adds java to list
  jimi.completeTask();//busy now false
  jimi.offerNewTask();//jimi can accept tasks
  jimi.acceptNewTask();//jimi is busy
  jimi.offerNewTask();//jimi cant accept tasks
  jimi.listLanguages();//swift css java 
  console.log('='.repeat(25));
  mike.offerNewTask();//michael can accept tasks


}
main();
