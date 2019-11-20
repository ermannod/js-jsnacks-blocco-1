var num = prompt('Enter a 4 digits number');
console.log(num);

var sum  = 0 ;
if (num.length === 4){
  while (num) {
    sum += num % 10;
    num = Math.floor( num / 10);
  }
  console.log('Sum of number ' + sum);
} else {
console.log('Plese enter a 4 digit number');
}
