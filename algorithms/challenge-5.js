function arraySum(arr1, arr2) {
  let newArray = [];

  for (let i = 0; i < arr1.length; i++) {
    newArray[i] = arr1[i] + arr2[i % arr2.length];
  }

  return newArray;
}

module.exports = arraySum;
