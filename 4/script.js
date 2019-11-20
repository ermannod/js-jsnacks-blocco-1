var names = ["Draper" , "Cooper" , "Sterling" , "Pryce"];
console.log(names);

var guest = prompt('Enter your name');
console.log('Your name '+ guest);

var find = false;
if (names == guest){
  find = true;
  console.log('is '+ guest + ' on the list?' + find);
}

if (find = true) {
  console.log('Your name is on the list!');
} else {
  console.log('Your name is not on the list');
}
