//read in names and get rid of any surrounding whitespace
let name1 = prompt("Enter your last name: ").trim();
let name2 = prompt("Enter your friend's last name: ").trim();

//name 1 is longer
if(name1.length > name2.length){
  console.log(`${name1} has ${name1.length - name2.length}` +
    ` more characters than ${name2}`);
} else if(name2.length > name1.length){//name 2 is longer
  console.log(`${name2} has ${name2.length - name1.length} more` +
    ` characters than ${name1}`);
} else {//if neither are longer than the other they must be the same length
  console.log(`${name1} and ${name2} have the same length with` +
    ` ${name1.length} characters`);
}
