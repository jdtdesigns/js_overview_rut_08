// var something = null || 0 || [] || 100;

var todoForm = document.querySelector('#todo-form');

function getTodos() {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

function addTodo(eventObj) {
  eventObj.preventDefault();

  var titleInput = document.querySelector('#title');
  var textInput = document.querySelector('#text');
  var nameInput = document.querySelector('#name');


  var todo = {
    title: titleInput.value,
    text: textInput.value,
    name: nameInput.value
  };

  var todos = getTodos();

  todos.push(todo);

  localStorage.setItem('todos', JSON.stringify(todos));

  titleInput.value = '';
  textInput.value = '';
  nameInput.value = '';

  showTodos();
}

function showTodos() {
  // Grab the output div from the DOM
  var todoOutput = document.querySelector('.todo-output');
  // Grab the todos array from localStorage
  var todos = getTodos();

  if (todos.length) {
    todoOutput.innerHTML = '';
  }

  // Loop over the todos array and for each todo object, output a div to
  todos.forEach(function (todoObj) {
    var div = document.createElement('div');

    div.classList.add('todo');
    // Each div will have 2 elements - h2, h3 and p
    // The h2 will hold the object name
    // The h3 will hold the object title
    // The paragraph will hold the object text
    var h2 = document.createElement('h2');
    var h3 = document.createElement('h3');
    var p = document.createElement('p');

    h2.innerText = todoObj.name;
    h3.innerText = todoObj.title;
    p.innerText = todoObj.text;

    div.append(h2, h3, p);

    // Append div above to the todoOutput
    todoOutput.append(div);
  });

}

showTodos();

todoForm.addEventListener('submit', addTodo);


// var data = localStorage.getItem('blah');

// console.log(data);


// var data = {
//   'background-color': 'JD',
//   names: ['JD', 'Jane'],
//   another: 'some other value'
// }

// data['background-color']
// data.names[0]


// var todoData = JSON.parse(localStorage.getItem('todos'));

// console.log(todoData.title);

// var person = {
//   name: 'JD',
//   age: 43
// };

// person.name

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