function oddEven(number) {
  if (number === 0) {
    console.log("it is a 0 please any enteger number without 0 ");
    return 0;
  }
  const even = number % 2;
  if (even === 0) {
    console.log("even number");
  } else {
    console.log("odd number");
  }
}

const oddEvenNumber = oddEven(43);
