//return anon function that returns the exercise
let exercise = (activity) =>  () =>  "\nToday's Exercise: " + activity;

let swim = exercise('Swimming');
let run = exercise('Running');
let cycle = exercise('cycling')

console.log(swim(),run(),cycle());
