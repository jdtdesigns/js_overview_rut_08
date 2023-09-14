
var h1 = document.querySelector('#main-header');
var choicesDiv = document.querySelector('.choices');
var addBtn = document.querySelector('#add');

var choices = ['DOM', 'BOB', 'DOP', 'DOT'];
var correctAnswer = 'DOM';
var score = 0;

choices.forEach(function (choice) {
  var btn = document.createElement('button'); // <button></button>

  btn.innerText = choice;

  if (choice === correctAnswer) {
    btn.dataset.correct = true;
  }

  // btn.addEventListener('click', function () {
  //   if (this.dataset.correct) {
  //     alert('You are correct!');
  //   } else {
  //     alert('You are wrong!');
  //   }
  // });

  choicesDiv.append(btn);
});

// document.body.addEventListener('', function () {
//   console.log('body clicked');
// })

function checkAnswer(eventObj) {
  var el = eventObj.target;

  if (el.tagName === 'BUTTON') {
    if (el.dataset.correct) {
      score += 10;
      console.log('you are correct!');
    } else {
      console.log('Incorrect!');
    }
  }
}

choicesDiv.addEventListener('click', checkAnswer);


function addChoice() {
  choicesDiv.insertAdjacentHTML('beforeend', '<button>Another</button>');
}

addBtn.addEventListener('click', addChoice);


console.log(questions);






// var choices = ['DOM', 'BOB', 'DOP', 'DOT'];
// var html = '';

// choices.forEach(function (choice) {
//   var btn = '<button>' + choice + '</button>';

//   html += btn;
// });

// console.log(html);

// choicesDiv.innerHTML = html;










// var firstBtn = btns[0];
// var secondBtn = btns[1];

// if (firstBtn.dataset.correct === 'true') {
//   console.log('You are correct!');
// }

// if (secondBtn.dataset.correct === 'true') {
//   console.log('You are correct 2nd button');
// }





// h1.style.color = 'red';


// var h1 = {
//   style: {
//     color: ''
//   }
// };


// h1.style.color = 'orange';

// var jd = {
//   hairColor: 'white',
//   eyeColor: 'grey',
//   height: '6\'2"'
// };
