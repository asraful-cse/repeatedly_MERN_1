let shoppingCard = {
  books: 3,
  mouse: 4,
  pan: 32,
  laptop: 7,
  mobile: 8,
};

// const property = Object(shoppingCard);
// console.log(property);
const keys = Object.keys(shoppingCard)  // forloop er jonno obossoi keys take variable rakhtei hobe---------

for (let i = 0; i < keys.length; i++) {
  const propertyName = keys[i];
  const propertyValue = shoppingCard[propertyName];
  console.log(propertyName, propertyValue);
}

for(const property in shoppingCard){
  const keys = property
  const value = shoppingCard[keys]
  console.log(keys, value);
}


