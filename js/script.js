
// Function that takes a name(string) as an argument and prints that name to the console


function printName(type, firstName, lastName) {
  if (type === 'first') {
    return firstName;
  }

  if (type.toLowerCase() === 'last') {
    return lastName;
  }

  return 'no type supplied';
}


var result = printName('LaSt', 'JD', 'Tadlock');

console.log(result);

