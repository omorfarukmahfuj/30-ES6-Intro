const mobile = {
  brand: 'Samsung',
  price: 15000,
  color: 'Black'
}

console.log('Original Object');
console.log(mobile);


const keys = Object.keys(mobile);
console.log('Object.keys');
console.log(keys);

const values = Object.values(mobile);
console.log('Object.values');
console.log(values);

// Array of Array or 2 Dimensional Array
const entries = Object.entries(mobile);
console.log('Object.entries');
console.log(entries);

// Deleting Object Properties
delete mobile.price; // method 1
console.log('delete method 1');
console.log(mobile);

const { color, ...smartphone } = mobile; // method 2
console.log('delete method 2');
console.log(smartphone);



Object.freeze(mobile);
mobile.memory = '4GB'; // Create ❌
mobile.color = 'red'; // Update ❌
delete mobile.brand; // Delete ❌
console.log('Object.freeze');
console.log(mobile);

// seal
Object.seal(mobile);
mobile.memory = '4GB'; // Create ❌
mobile.color = 'Red'; // Update ✅ 
delete mobile.brand; // Delete ❌
// Color might not be changed because of previous code of freeze
console.log('Object.seal');
console.log(mobile);