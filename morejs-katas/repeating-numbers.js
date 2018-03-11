var repeatNumbers = function(data) {
	var arrayTest = [];
	var string = "";  
  for (var line = 0; line < data.length; line++) {
    for (var colum = 0; colum < 1; colum++) {
	      var a = data[line][0];
	      var b = data[line][1];
     for(var p = 0; p < b; p++){
	      arrayTest.push(a);
	      console.log(arrayTest + " array do meio");
	      if(string[line] === data[line]){

	      	string = string.join(", ");
	      	
	      }	else {
	      	string = arrayTest.join("");
	      }     

     } 
  }
}
  
  return string;
    
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [5, 3], [4,7]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2],]));











