function maxNumber(numbers) {
  let largest = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = numbers[i];

    if (index > largest) {
      largest = index;
    }
  }
  return largest;
}

const numbers = [1, 2, 3, 4, 15, 6, 7, 8, 9];

const countNumbers = maxNumber(numbers);

console.log(countNumbers);
