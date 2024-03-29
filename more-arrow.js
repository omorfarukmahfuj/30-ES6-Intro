const difference = (x, y) => x - y;
const multiply = (x, y, z) => x * y * z;
const getAge = (person) => person.age;

// single parameter
const person = { name: "Omor", age: 20 };
const age = getAge(person);
console.log(age);

const getThird = numbers => numbers[2];

const third = getThird([12, 10, 11, 9]);
console.log(third);

// no parameter
const getPI = () => Math.PI;
console.log(getPI());

// large arrow function
const doMath = (x, y, z) => {
  const sum = x + y + z;
  const multiply = x * y * z;
  const result = sum + multiply;
  return result;
}

console.log(doMath(1, 2, 3));