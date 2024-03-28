// var : no reason to use var
// let : allow it to re-assign
// const : do not allow to re-assign


// VARIABLE
const money = 25;
// money = 60; 
// const value can't be reassign in a variable
console.log(money);

let count = 0;
count = count + 10;
console.log(count);


// ARRAY
const numbers = [2, 4, 56, 6, 44, 67, 34];
// numbers = [45, 6, 4, 76,];
// const array can't be changed, but we can change the inner value using index
numbers[1] = 55;
console.log(numbers);


// OBJECT
const person = {
  name: "Omor",
  age: 20
}

/*
person = {
  name: "Faruk"
}
*/
// const object can't be reassign but we can update value using objectName.property
person.name = "Omor Faruk"
console.log(person);


// LOOP
// const sum = 0; 
let sum = 0;
for (let i = 0; i < 10; i++) {
  const num = i; //const value can be updated in a loop 
  sum = sum + num;
}
console.log(sum);