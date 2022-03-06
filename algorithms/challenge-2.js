function numSwap(number) {
  let newNum = number
    .toString()
    .split("")
    .map((number) => {
      return Number(number);
    });
  let value = 0;
  for (let i = 0; i < newNum.length; i += 2) {
    value = newNum[i];
    newNum[i] = newNum[i + 1];
    newNum[i + 1] = value;
  }
  return Number(newNum.join(""));
}

numSwap(1234);
numSwap(432156);
module.exports = numSwap;
