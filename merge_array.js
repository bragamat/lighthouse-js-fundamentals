function concat(array1, array2) {
  var finalArray = [];
  for (var i = 0; i < array1.length; i++) {
    finalArray.push(array1[i]);		
  }
  for (i = 0; i < array2.length; i++) {
    finalArray.push(array2[i]);  	
  }
  for (var i = 0; i <= finalArray.length; i++) {
    for (var j = i+1; j< finalArray.length; j++) {
      if (finalArray[i] > finalArray[j]) {
        var solution = finalArray[i];
        finalArray[i] = finalArray[j];
        finalArray[j] = solution;
      }

    } 
  }
  return finalArray;
} 

