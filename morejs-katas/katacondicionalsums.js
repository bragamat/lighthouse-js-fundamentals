var conditionalSum = function(values, condition) {
var sum = 0;
  for (var i = 0; i < values.length; i++) {
   var number = values[i];    
    if (number % 2 === 0) {
      if (condition === "even") {
       sum += number;
      }
    } else {
        if (condition === "odd") {
          sum +=  number;
        }
      }
  }
return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));