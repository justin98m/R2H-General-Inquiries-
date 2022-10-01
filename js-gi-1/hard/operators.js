let add = (num1, num2) => num1 + num2;
let subtract = (num1,num2) => num1 - num2;
let multiply = (num1,num2) => num1 * num2;
let divide = (num1,num2) => {
  if(num2 === 0){
    return "DIVIDE By 0 ERROR";
  }
  return num1 / num2;
}
