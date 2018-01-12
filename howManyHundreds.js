function howManyHundreds(number) {

	return (parseInt(number = number / 100)) ;

}


console.log(howManyHundreds(1234), "=?", 10);
console.log(howManyHundreds(55), "=?", 8);
console.log(howManyHundreds(100), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);