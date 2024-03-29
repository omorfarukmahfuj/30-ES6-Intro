const first = 'Omor';
const middle = 'Faruk';
const last = 'Mahfuj'
const name = first + ' ' + middle + ' ' + last;
console.log(name);

const a = 10;
const b = 20;
const result = 'The sum of ' + a + ' and ' + b + ' is ' + (a + b);
console.log(result);

// Template Literals

const numbers = [45, 48, 52, 25];
const person = { name: 'Mahfuj', id: 133 };

// const math = `The sum of ${a} and ${b} is ${a + b}`;

const math = `The sum of ${numbers[0]} and ${person.id} is ${a + b}`;
console.log(math);

const multilineString = `This is a 
multiline String 
using backtick`
console.log(multilineString);