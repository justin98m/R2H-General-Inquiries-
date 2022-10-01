const MONTHS = [
  'January',
  'Febuary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
function getMonth(){
  return Number(prompt("Give me a month in number form (1-12)"));
}
function isValid(numberMonth){
  //otherwise if number is not in range than the num is not valid
  if(numberMonth >= 1 && numberMonth <= 12){
    return true;
  }
  return false;
}
function printMonth(numberMonth){
  //subtract 1 to represent array pos
  alert(MONTHS[numberMonth-1])
}
function main(){
  while(true){
    let numberMonth = getMonth();
    if(!isValid(numberMonth)){
      alert('Invalid Month Entered! Must be a number between 1 and 12 inclusive');
      //restart prompt
      continue;
    }
    printMonth(numberMonth);

  }
}
main();
