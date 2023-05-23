const mobile = {
  brand: "Samsung",
  price: 10000,
  color: "gray",
};

let updateMobile = mobile;
updateMobile ='color'
console.log(updateMobile);

// when you know property------
const priceCount = mobile.price;
console.log(priceCount);
// alternative-----------------
const priceCount2 = mobile['price']
console.log(priceCount2);

// Dynamic vabe object, properties, value khojar way-------------------------
const getDynamicSearchPropertiesKeys = Object.keys(mobile);
console.log(getDynamicSearchPropertiesKeys);
const getDynamicSearchPropertiesValues = Object.values(mobile);
console.log(getDynamicSearchPropertiesValues);
const getDynamicSearchProperties = Object(mobile);
console.log(getDynamicSearchProperties);