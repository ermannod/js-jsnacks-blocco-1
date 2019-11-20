
var numlist = [];

for (var i = 0; i < 6 ; i++) {
 var num = parseInt(prompt('Enter a number'));
 if (num % 2 == 1){
   numlist.push(num);
 }
}
console.log(numlist);
