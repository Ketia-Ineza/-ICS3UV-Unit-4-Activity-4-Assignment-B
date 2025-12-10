/**
 * @author Ketia
 * @version 1.0.0
 * @date 2025-12-10
 * @fileoverview Car Functions
 */

// VARIABLES
let odometer: number = 65000;          // current mileage
let oilChangeKM: number = 65000;       // last oil change
let carColor: string = "Red";          // initial color
let carModel: string = "Toyota Corolla";
let gasCost: number[] = [];            // store gas fill-up costs

// FUNCTION to display car stats
function carStats(): string {
  return `Car Stats:
Model: ${carModel}
Colour: ${carColor}
Odometer: ${odometer} km
Last oil change at: ${oilChangeKM} km`;
}

// FUNCTION to change car color
function wrapCar(): void {
  carColor = prompt("Enter a new colour for your car:")!;
  console.log(`Your car's new colour is: ${carColor}`);
}

// FUNCTION to simulate driving
function drive(): void {
  const distance = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
  odometer += distance;
  console.log(`You drove ${distance} km. Odometer is now ${odometer} km.`);
}

// FUNCTION to check oil change
function checkOilChange(): void {
  if (odometer - oilChangeKM >= 5000) {
    console.log("An oil change was done.");
    oilChangeKM = odometer;
  } else {
    console.log("Your car does not need an oil change.");
  }
}

// FUNCTION to fill up gas
function fillUp(): void {
  const cost = +prompt("Enter the cost to fill up your car:")!;
  gasCost.push(cost);
}

// FUNCTION to display gas costs and average
function displayGasCosts(): void {
  let total = 0;
  console.log("\nCosts to fill up:");
  for (let i = 0; i < gasCost.length; i++) {
    console.log(`Fill-up ${i + 1}: $${gasCost[i].toFixed(2)}`);
    total += gasCost[i];
  }
  const average = total / gasCost.length;
  console.log(`Average cost: $${average.toFixed(2)}`);
}

console.log("\nInitial Car Stats:");
console.log(carStats());

wrapCar();      // change color
drive();        // simulate driving
checkOilChange(); // check if oil change needed

// Fill up gas two times for example
fillUp();
fillUp();
displayGasCosts();

console.log("\nUpdated Car Stats:");
console.log(carStats());
