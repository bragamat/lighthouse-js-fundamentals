function concat(array1, array2) {
  var finalArray = [];
  for (var i = 0; i < array1.length; i++) {
    finalArray.push(array1[i]);		
  }
  for (i = 0; i < array2.length; i++) {
    finalArray.push(array2[i]);  	
  }
  return finalArray;
} 

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);