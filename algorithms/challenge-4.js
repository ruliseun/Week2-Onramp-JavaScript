function withdraw(amount) {
  let amountLessThan100 = amount % 100;
  let hundred = (amount - amountLessThan100) / 100;
  let amountLessThan50 = amountLessThan100 % 50;
  let fifty = (amountLessThan100 - amountLessThan50) / 50;
  let twenty = amountLessThan50 / 20;

  return [hundred, fifty, twenty];
}

module.exports = withdraw;
