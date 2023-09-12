
var h1 = document.getElementById('main-header');
var wrapperDiv = document.querySelector('#wrapper-div');
var image = document.querySelector('#image');
var h3 = document.querySelector('#nested-header');

// console.log(h1.innerText);

// h1.innerText = '<p>Changed Text</p>';

h1.style.color = 'red';
h1.style.fontSize = '35px';

wrapperDiv.innerHTML = '<p class="text-center">Some inner paragraph</p>';

h1.classList.add('text-center');

// h1.setAttribute('class', 'text-center');


image.setAttribute('src', 'https://picsum.photos/200/300');