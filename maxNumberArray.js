function maxNumber(numbers) {
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const index = numbers[i];

    if (index > largest) {
      largest = index;
    }

    // minimum array of number-------------
    // if (index < largest) {
    //   largest = index;
    // }
  }
  return largest;
}

const numbers = [2, 2, 3, 1, 15, 6, 7, 8, 9];

const countNumbers = maxNumber(numbers);

console.log(countNumbers);
