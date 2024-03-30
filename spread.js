const max = Math.max(6, 25, 26, 5, 69, 1, 52, 56, 85);
const numbers = [3, 25, 12, 15, 66, 12, 55, 40];
const arrayMax = Math.max(...numbers);

console.log(max);
console.log(arrayMax);

// use spread operator to copy 
const values = [20, 25, 26, 14, 8, 10];
const moreValues = values;
moreValues.push(100);

// pass by reference in javascript
console.log(moreValues);
console.log(values);

// add extra element while copy
const copyValue = [...values, 999];
copyValue.push(50);
console.log(copyValue);
console.log(values);