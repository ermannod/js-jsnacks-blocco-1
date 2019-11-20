var numbers = [];
for (var i = 0; i < 10 ; i++) {
  var num = parseInt(prompt('Enter a number'));
  numbers.push(num);
}
console.log(numbers);

var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log('Sum of all numbers ' + sum);

var avg = sum / numbers.length;
console.log('Average is ' + avg);
