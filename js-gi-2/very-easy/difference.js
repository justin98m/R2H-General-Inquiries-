let MAX_NUMBER = 100;
let MIN_NUMBER = 1;

function randomizedNumber(){
  //gets a random number and rounds it to a integer value
  return Number.parseInt(
    Math.random() * (MAX_NUMBER - MIN_NUMBER) + MIN_NUMBER
  );
}

//Give both numbers a random number assignment
let num1 = randomizedNumber();
let num2 = randomizedNumber();

//display results
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log('Refresh for another Result');
