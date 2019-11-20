var n = prompt('Enter a number');
console.log('word 1: ' + n);
var n1 = prompt('Enter a number');
console.log('word 2: ' + n1);

if (n.length == n1.length){
  console.log('It is a tie' + n);
} else if ( n.length < n1.length ){
console.log(n1 + ' is longer');
} else {
console.log(n + ' is longer');
}
