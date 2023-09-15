
var todoForm = document.querySelector('#todo-form');

function addTodo(eventObj) {
  eventObj.preventDefault();

  var titleInput = document.querySelector('.title');
  var textInput = document.querySelector('#text');


  titleInput.value = '';
  textInput.value = '';
}

todoForm.addEventListener('submit', addTodo);








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