const person = {
  name: 'Omor Faruk',
  age: 20,
  phone: 1122334455,
  isDeveloper: true
}

const personName = person.name;
const personAge = person.age;
const personPhone = person.phone;
console.log(personName, personAge, personPhone);

// Destructuring Object
const { name, age, isDeveloper: isProgrammer } = person;
console.log(name);
console.log(age);
// console.log(isDeveloper); // this will give an error
// property name changed
console.log(isProgrammer);

// Destructuring Array
const numbers = [20, 11];
const [first, second] = numbers;
const [x, y] = [12, 16];

// 
function doubleThem(a, b) {
  return [a * 2, b * 2];
}
const [firstNum, secondNum] = doubleThem(6, 7);
console.log(firstNum, secondNum);