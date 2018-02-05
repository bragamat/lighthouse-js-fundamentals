function loopyLighthouse(range, multiples, words) {
  var number;
  for (var i = range[0]; i <= range[1]; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log(words[0] + "" + words[1]);
    } else if (i % multiples[1] === 0 ){
      console.log(words[1]);
    } else if (i % multiples[0] === 0) {
      console.log(words[0]);
    } else{
      console.log(i);
    }
    //console.log("Printing Number: " +i);
  }
}

loopyLighthouse([15,90], [2,5], ["Batty", "Beacon"]);

// Your loopyLighthouse function should log to the console all the numbers 
// from 15 to 90, except replacing multiples of 2 with "Batty", multiples of 5 
// with "Beacon", and multiples of 2 and 5 with "BattyBeacon".