function cutPizzaSlices(numSlices) {
  return function(peopleEating) {

    let split = (numSlices/peopleEating).toFixed(2);

    return `With ${numSlices} slices and ${peopleEating} people eating, `+
    `each person gets ${split} slices of pizza`;
  }
}

let sharePizza = cutPizzaSlices(12);
console.log(sharePizza(2));
console.log(sharePizza(3));
console.log(sharePizza(4));
console.log(sharePizza(5));
console.log(sharePizza(6));
