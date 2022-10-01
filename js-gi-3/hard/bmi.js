const TOM  = {
  heightInInches: 9,
  weightInGrams: 8
}
const JERRY = {
  heightInInches: 10,
  weightInGrams: 45
}
//returns bmi with a max 3 decimal places
let calculateBMI = (mass,height) => (mass / (height * height)).toFixed(3);

//can assign value to const object since pointer is not changed
TOM.BMI = calculateBMI(TOM.weightInGrams,TOM.heightInInches);
JERRY.BMI = calculateBMI(JERRY.weightInGrams, JERRY.heightInInches);

let tomHigherBMI = TOM.BMI > JERRY.BMI;
console.log(`Tom has a BMI of ${TOM.BMI}`);
console.log(`Jerry has a BMI of ${JERRY.BMI}`);
console.log(`This means the statement that Tom has a higher BMI than Jerry`
  + `is ${tomHigherBMI}`);
