var repeatNumbers = function(data) {
  var arrayTest = [];
  for (i = 0; i < data.length; i++) { 
    inner_array = data[i]
    arrayTest.push(Array(inner_array[1]+1).join(inner_array[0]))
  };
  var string = arrayTest.join(', ')

  return string;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [5, 3], [4,7]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));