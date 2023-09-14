
// document.body.addEventListener('click', function (eventObj) {
//   console.log(eventObj.target);
// });

var toggle = document.querySelector('.toggle-bar');

toggle.addEventListener('click', function () {
  var toggleSwitch = document.querySelector('.toggle');

  toggleSwitch.classList.toggle('switch');
});




// var btn = document.querySelector('#add');

// btn.addEventListener('click', function () {
//   console.log('clicked')
// });

// document.addEventListener('keyup', function (eventObj) {
//   var key = eventObj.keyCode || eventObj.key;

//   if (key === 13 || key === 'enter') {
//     console.log('you pressed the enter key');
//   }
// });