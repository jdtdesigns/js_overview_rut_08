
var str = 'some string';
var num = 10;
var bool = true;
var arr = ['JD', 'Tadlock', 43, 'Rodolfo', ' Espinosa', 31];
var anotherObj = {
  color: 'red',
  likes: 'pizza'
};

var jd = {
  firstName: 'JD',
  lastName: 'Tadlock',
  age: 43,
  hobbies: ['fishing', 'pickleball'],
  info: {
    location: 'ATL',
    local: ['coffee shop', 'mall', 'fast food']
  },
  printAge: function () {
    console.log(this.age);
  },
  printSomething: function (someStr, num, setDarkMode) {
    // console.log(b);
    console.log(num);
  }
};



jd.printAge();









// console.log(str.toUpperCase());

// var someName = 'some string';

// someName();

// function add(num1, num2) {
//   console.log(num1 + num2);
// }

// add(1, 2);
// add(3, 5);
// add(1000234209342, 223490283450928509285098);


// if (3 === 3) {
//   console.log('yep, those are the same nums');
// }
