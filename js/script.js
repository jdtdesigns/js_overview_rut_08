

function printName(userName) {
  var capitalize = function (str) {
    return str[0].toUpperCase() + str.slice(1);
  };

  var output = capitalize(userName);

  return output;
}

var result = printName('rodolfo');

console.log(result);
