var num = [];

for (var i = 0; i < 5 ; i++) {
   var numbers = parseInt(prompt('Enter a number'));
   num.push(numbers);
}
console.log(num);

// var sum = 0;
// // for (var i = 0; i < num.length; i++) {
// //   sum += num[i];
// // }
// // console.log(sum);

var sum = 0;
var count = 0;
while (count < num.length) {
    sum += num[count];
    count++;
}
console.log(sum);
