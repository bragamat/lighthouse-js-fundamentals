var calculateChange = function(total, cash) {
  var change = [];
  var iqual = {};
  var obj = {"twentyDollar": 2000, "tenDollar": 1000, "fiveDollar": 500, "twoDollar": 200, 
  "oneDollar": 100, "quarter": 25, "dime": 10, "nickel": 5, "penny": 1};
  var teste = {};
  var changeMoney = (cash - total);
  for(elm in obj){
    if(changeMoney > obj[elm]) {
      iqual = Math.floor(changeMoney/obj[elm]);
      teste = " "+ elm + ": " + iqual;
        change.push(teste);
    changeMoney = changeMoney%obj[elm];
    //console.log(typeof(iqual));
    //console.log(teste)     
    }//console.log(typeof(change));
    var string1 = "{"+ change + " }" ;
   } var stuff = console.log(typeof(change));
   change.twoDollar = 5; 
   return string1;
console.log(stuff)
    
   
};

//console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
//console.log(calculateChange(501, 1000));

/* Expected output 

{ twoDollar: 1, dime: 1, penny: 3 }
{ ten: 1, twoDollar: 1, dollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

Twenty dollars
Ten dollars
Five dollars
Two dollars
One dollar
Quarter (25¢)
Dime (10¢)
Nickel (5¢)
Penny (1¢)

*/