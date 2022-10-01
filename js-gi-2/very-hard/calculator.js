const MULTIPLICATION = '*';
const ADDITION = '+';
const DIVISION = '/';
const SUBTRACTION = '-';

let add = (num1, num2) => num1 + num2;
let subtract = (num1,num2) => num1 - num2;
let multiply = (num1,num2) => num1 * num2;
let divide = (num1,num2) => {
  if(num2 === 0){
    return "DIVIDE By 0 ERROR";
  }
  return num1 / num2;
}

function operate(operator,num1,num2){
  if(operator === MULTIPLICATION ){
    return multiply(num1,num2);
  } else if(operator === ADDITION){
    return add(num1,num2);
  } else if(operator === SUBTRACTION){
    return subtract(num1,num2);
  } else if(operator === DIVISION){
    return divide(num1,num2);
  }
}
function getInput(){
  alert('Enter Q at anytime to quit');
  let num1 = prompt("Give me your first number:");
  if(num1.toUpperCase() === 'Q')return false;

  let operator = prompt("Give me an operator: ");
  if(operator.toUpperCase() === 'Q')return false;

  let num2 = prompt("Give me your second number:");
  if(num2.toUpperCase() === 'Q')return false ;
  //Conversion is done after incase a q is entered
  num1 = Number(num1);
  num2 = Number(num2);

  alert(num1 + operator + num2 + '=' + operate(operator,num1,num2));
  return true;
}
//run program until user quits
let runProgram = true;
while(runProgram){
  runProgram = getInput();
}
