
var todoForm = document.querySelector('#todo-form');
var colorForm = document.querySelector('#color-form');
var body = document.body;

function addTodo(eventObj) {
  eventObj.preventDefault();

  var titleInput = document.querySelector('.title');
  var textInput = document.querySelector('#text');


  titleInput.value = '';
  textInput.value = '';
}

function showColor() {
  var color = localStorage.getItem('color');

  body.style.backgroundColor = color;
}

function updateColor(eventObj) {
  eventObj.preventDefault();

  var colorInput = document.querySelector('#color-input');

  localStorage.setItem('color', colorInput.value);

  colorInput.value = '';

  showColor();
}

showColor();

todoForm.addEventListener('submit', addTodo);
colorForm.addEventListener('submit', updateColor);








// var Math = {
//   random: function() {
//     return 0.234224234234234234
//   }
// };

// console.log(Math.random());



// var data = {
//   name: 'JD',
//   age: 43
// };


// data.age