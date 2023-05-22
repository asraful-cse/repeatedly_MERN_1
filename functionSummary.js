function addMultiplePerametter(a, b) {
  const sum = a + b;
  return sum;
}

const first = 1;
const second = 2;
const total = addMultiplePerametter(first, second);
console.log("total", total);

const third = 1;
const forth = 2;
const total2 = addMultiplePerametter(third, forth);
console.log("total2", total2);

const total3 = addMultiplePerametter(total, total2);
console.log("threeeeeeeeee", total3);


