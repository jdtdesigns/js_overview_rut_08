
// var chars = ['a', 'b', 'c', 'd', 'e', 'f'];
var lowercase = 'abcdef';
var uppercase = 'ABCDEF';
var numbers = '0123456789';
var specials = '~!@#$%^&*()/><,.;:{}[]+';
var combined = '';
var password = '';

var wantsLowercase = confirm('Do you want lowercase letters?');
var wantsUppercase = confirm('Do you want uppercase letters?');
var wantsNumbers = confirm('Do you want numbers?');
var wantsSpecials = confirm('Do you want special characters?');

var passwordLength = prompt('How many characters would you like?');

if (wantsLowercase) {
  combined += lowercase;
}

if (wantsUppercase) {
  combined += uppercase;
}

// Validation - checking your values for the expected result
if (passwordLength.length < 1) {
  alert('You must enter a valid number of characters');
  passwordLength = prompt('How many characters would you like?');
}

if (isNaN(passwordLength)) {
  alert('Your value must be a number');
  passwordLength = prompt('How many characters would you like?');
}

for (var count = 0; count < passwordLength; count++) {
  var random = Math.random(); // 0.123422234241324234
  var index = Math.floor(random * combined.length);

  password += combined[index];
}

console.log(password);









// var random = Math.random(); // 0.123422234241324234
// // console.log(random);
// var charsIndex = Math.floor(random * chars.length);

// console.log(chars[charsIndex]);



// for (var index = 0; index < chars.length; index++) {
//   console.log(chars[index]);
// }


// How would I get a random character or item from the array?

// console.log(chars[8]);



// console.log(chars[index]);

// Let's make a for loop that runs 10 times and each time it loops, it adds a random character from the array to a string










// function add(num1, num2) {
//   var sum = num1 + num2;

//   return sum;
// }


// var result1 = add(3, 7);
// var result2 = add(30, 100);

// console.log(result1);
// console.log(result2);


// function something(name, age) {
//   console.log(name, age);
// }

// something(43, 'JD');








// console.log(result);

// console.log(doSomething())
// console.log(doSomething())
// console.log(doSomething())
// console.log(doSomething())