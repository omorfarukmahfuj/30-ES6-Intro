// for of use on array and string not object
// for in use on object

const numbers = [1, 2, 3, 4, 5, 6];
for (const num of numbers) {
  console.log(num);
}

const string = 'This is a string';
for (const char of string) {
  console.log(char);
}

const mobile = {
  brand: 'Samsung',
  price: 15000,
  color: 'Black'
}

for (const key in mobile) {
  const value = mobile[key]
  console.log(key, value);
}

const keys = Object.keys(mobile);
console.log(keys);

for (const key of keys) {
  const value = mobile[key]
  console.log(key, value);
}