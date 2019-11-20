var n = 2;
console.log(n);

for (var i = 0; n < 1000 ; i++) {
  console.log(n);
  n = Math.pow( 2 , i);
}
