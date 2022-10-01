//anon functions return one liners automatcially
//tenary will return val1 if less than val2 
//otherwise it returns val2
let min = (val1, val2) => val1 < val2 ? val1 : val2;
console.log(min(5,4));
console.log(min(5,5));
console.log(min("hey",'hay'));
console.log(min(5,'t'));
console.log(min(-23,20));
