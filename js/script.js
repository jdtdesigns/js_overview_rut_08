
// var todoForm = document.querySelector('#todo-form');
// var colorForm = document.querySelector('#color-form');
// var body = document.body;

// function addTodo(eventObj) {
//   eventObj.preventDefault();

//   var titleInput = document.querySelector('.title');
//   var textInput = document.querySelector('#text');


//   titleInput.value = '';
//   textInput.value = '';
// }

// function showColor() {
//   var color = localStorage.getItem('color');

//   body.style.backgroundColor = color;
// }

// function updateColor(eventObj) {
//   eventObj.preventDefault();

//   var colorInput = document.querySelector('#color-input');

//   localStorage.setItem('color', colorInput.value);

//   colorInput.value = '';

//   showColor();
// }

// showColor();

// todoForm.addEventListener('submit', addTodo);
// colorForm.addEventListener('submit', updateColor);










// localStorage.setItem('darkMode', true);

var darkMode = localStorage.getItem('darkMode');

console.log(typeof darkMode);

// localStorage.setItem('age', 43);

var age = localStorage.getItem('age');

console.log(typeof age);

// localStorage.setItem('fruits', JSON.stringify(['apple', 'grape', 'orange']));

var fruits = JSON.parse(localStorage.getItem('fruits'));


console.log(fruits[0]);

