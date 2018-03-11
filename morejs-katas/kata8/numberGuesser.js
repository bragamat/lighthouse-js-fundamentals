function numberGuesser(){
var prompt = require("prompt-sync")();
var i = 0;
var userAnswer = false;
var storedNumber = new Array(); 
var teste;
var number = Math.floor(Math.random()*10);
 while(!userAnswer){
  var answer = prompt("Guess a number: ");
  	storedNumber.push(answer);  	
   if (answer == number){
	 console.log("You got it! You took " + i + " attempts!");	 
	 userAnswer = true;
	} else if(answer > number){		
	  console.log("Too High!");
	   var wishToStop = prompt("Deseja parar ? ");
		 if(wishToStop === "y"){
		 	userAnswer = true;
		 }	
	} else if (answer < number){
		console.log("Too Low!");
	} else if (answer !== number){
		console.log("Not a number! Try again!");
	}i++;
	teste = storedNumber.find(function(element){
		if (element == answer) {
			console.log("Already Guessed!")
		}
	});
  } console.log(storedNumber);
   return storedNumber;
}
 numberGuesser();