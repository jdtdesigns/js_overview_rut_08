

// function someFunc() {
//   return 'some value';
// }

// var result = someFunc();

// console.log(result);

// localStorage.setItem('name', 'JD');
// var result = localStorage.getItem('name');

// console.log(result);


// localStorage.removeItem('name');
// var fruits = ['orange', 'apple', 'grape'];

// localStorage.setItem('fruits', JSON.stringify(fruits));
var saved = localStorage.getItem('fruits');
var arr = JSON.parse(saved);

console.log(saved);