function missingNumber(numArr) {
  let myArray = [];

  for (let i = 1; i <= 9; i++) {
    if (numArr.indexOf(i) === -1) {
      myArray.push(i);
    }
  }
  myArray.sort((a, b) => {
    return a - b;
  });
  if (myArray.length === 0) {
    return false;
  } else {
    return myArray;
  }
}

module.exports = missingNumber;
