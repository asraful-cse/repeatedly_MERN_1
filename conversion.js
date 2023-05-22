const numberArray = () => {
  const p = [];

  const added = { a: 6, b: 4, c: 5, d: 7 };
  const added2 = [
    { a: 634, b: 4, c: 523, d: 74 },
    { a: 645, b: 4, c: 542, d: 72 },
    { a: 667, b: 485, c: 455, d: 7 },
  ];

  p.push(added, ...added2);
  //   console.log(p);

  return p;
};

// console.log();
const numbers = numberArray();
numbers.pop();
const newNumbers = numbers.map((num) => num.a);
// console.log(newNumbers);

// const popNumbers = numbers.pop();
// console.log(numbers);
// console.log(popNumbers);

const a = 5;
const b = 5;
console.log(a != b);
console.log(a !== b);
