const maxNumber = (arr1, arr2) => {
  const combinedArray = [...arr1, ...arr2];
  const maxNumber = Math.max(...combinedArray);
  return maxNumber;
}

console.log(maxNumber([2, 3, 4], [8, 24, 5]));