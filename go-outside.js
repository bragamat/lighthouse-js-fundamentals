var temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");


// Logical Operators

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

// Another Example 

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

// the Third one

if (!raining) {
  console.log("Leave your umbrella at home!");
}