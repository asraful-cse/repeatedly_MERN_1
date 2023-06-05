const jim = 60;
const dela = 70;
const chinku = 34;

function maxNum(jim, dela, chinku) {
  if (jim > dela && jim > chinku) {
    return jim;
  }
  if (dela > jim && dela > chinku) {
    return dela;
  } else {
    return chinku;
  }
}

const delijiusCake = maxNum(jim, dela, chinku);

// console.log(delijiusCake);

function maxMathNumber(jim, dela, chinku) {
  const maxNumber = Math.max(jim, dela, chinku);

  return maxNumber;
}

const cakeDelijius = maxMathNumber(jim, dela, chinku);
console.log(cakeDelijius);
