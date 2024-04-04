const element = (arr) => {
  let sum = 0;
  for (const element of arr) {
    sum = sum + element * element;
  }
  const average = sum / arr.length;
  return average;
}

console.log(element([2, 4, 4]));