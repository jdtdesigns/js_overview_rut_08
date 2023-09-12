var fruits = ['orange', 'apple', 'kiwi'];

var newFruits = fruits.map(function (fruit) {
  return 'Fruit: ' + fruit;
});

console.log(fruits);
console.log(newFruits);

// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }


// function someFunc(num, str, callback) {
//   callback('cb string', 5);
// }

// someFunc(10, 'some string', function (cbStr, cbNum) { console.log(cbNum) });


// var arr = {
//   items: ['orange', 'apple', 'kiwi'],
//   forEach: function(cb) {
//     for (var i = 0; i < arr.length; i++) {
//       cb(this.items[i]);
//     }
//   }
// }