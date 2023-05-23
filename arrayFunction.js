function make_avg(array, size) {
  if (size === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < size; i++) {
    sum = sum + array[i];
  }
  return sum / size;
}

const array = [1, 2, 3];
const size = array.length;
const av = make_avg(array, size);
console.log(av);

// average array of a function reduce using--------------
const numbersArray = [10, 10, 10];
function avg_make(numbersArray) {
  const total = numbersArray.reduce((acc, c) => acc + c, 0);
  return total / numbersArray.length;
}
const avg = avg_make(numbersArray);
console.log(avg);
