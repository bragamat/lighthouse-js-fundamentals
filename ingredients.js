var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("The array is: " +ingredients); 
console.log("<------------------ The first (while) loop: STARTS ------------------->");

var i = 0;

while (i < 8){
	console.log(ingredients[i]);
	i++;
}
console.log("<------------------ The first (while) loop: DONE ------------------->");


// Write a for loop that prints out the contents of ingredients:
console.log("<------------------ The second (for )loop: STARTS ------------------->");
for (var a = 0; a < ingredients.length; a++){
	console.log(ingredients[a]);
}

console.log("<------------------ The second loop: DONE ------------------->");
// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("<------------------ The third (backwards using: 'for') loop: STARTS ------------------->");
for (var b = ingredients.length - 1; b >= 0; b--) {
	console.log(ingredients[b]+ "----> item: " + b);
}
console.log("<------------------ The third loop: DONE ------------------->");

