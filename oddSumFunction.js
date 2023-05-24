function oddSum(number) {
  const oddNumber = [];
  for (let i = 0; i < number.length; i++) {
    const index = i;
    const element = number[index];
    // console.log(element);
    if (element % 2 !== 0) {
      //   console.log(element);
      oddNumber.push(element);
    }
  }
  // console.log(oddNumber);

  const totalSum = oddNumber.reduce((acc, a) => acc + a, 0);
  console.log(totalSum);
  return totalSum;
}

const numbers = [22, 33, 43, 24, 57];
const total = oddSum(numbers);
console.log("total sum", total);
