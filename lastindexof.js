function lastIndexOf(arrays, number) {
  var index = false;
  var indexArray = 0;
  for (var i = 0; i < arrays.length; i++) {
    if (arrays[i] === number) {
      indexArray = i;
      index = true;
    }
  }
  if (index) {
    return indexArray;
  } else{
    return -1;
  }


}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);