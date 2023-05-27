// includes -------------
const str = "a b c D e fF";

const myStr = "ff";
const existStr = str.toLocaleLowerCase().includes(myStr.toLocaleLowerCase());

console.log(existStr);

// indexOf --------------------

const strArray = "app div chap map";
// const strArray = [32,4242,234242,42424];

const myStrWord = "Chap";
const strLoweCase = myStrWord.toLocaleLowerCase();
// const strLoweCase = myStrWord;
const findIndex = strArray.indexOf(strLoweCase);
console.log(findIndex);



