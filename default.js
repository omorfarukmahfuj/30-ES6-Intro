// default --> if value is not provided, take this as a default value.
function add(num1 = 0, num2 = 0) {
  const result = num1 + num2;
  console.log(num1, num2, result);
  return result;
}

// const sum = add(1, 5);
// const sum = add(1);
const sum = add();

function fullName(firstName, lastName
  = '') {
  const fullName = firstName + '' + lastName;
  return fullName;
}

// expected array default
function arrayList(array = []) {

}

// expected object
function object(parameter = []) {

}