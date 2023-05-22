// Array update---------------------------problem 1

// const fruits = ['Apple', 'Banana', 'Orange']
// console.log(fruits);
// const find = fruits.indexOf('Banana')
// console.log(find);
// fruits[1]='Mango'
// console.log(fruits);
// fruits.pop()
// console.log(fruits);
// fruits.push('Watermelon')
// console.log(fruits);

// grade --------------------------- problem 2
// const marks =40;

// const grade = (marks) => {
//   if (marks <= 39) {
//     console.log("F grade");
//   } else if (marks <= 59) {
//     console.log("D grade");
//   } else if (marks <= 69) {
//     console.log("C grade");
//   } else if (marks <= 79) {
//     console.log("B grade");
//   } else if (marks <= 99) {
//     console.log("A grade");
//   }
// };

// const result = grade(marks);

// largest number of array-----------problem 3
// const num1 = 1;
// const num2 = 9;
// const num3 = 3;

// if (num1 > num2) {
//   if (num1 < num3) {
//     console.log(num3);
//   } else {
//     console.log(num1);
//   }
// } else if (num2 > num1) {
//   if (num2 < num3) {
//     console.log(num3);
//   } else {
//     console.log(num2);
//   }
// }

// problem solving----------
// const myTotalMoney = 81000;

// if (myTotalMoney <= 20000) {
//   console.log("mobile diye kaz cholbe");
// } else if (myTotalMoney <= 40000) {
//   console.log("second hand laptop");
// } else if (myTotalMoney <= 60000) {
//   console.log("Lenevo laptop");
// } else if (myTotalMoney <= 80000) {
//   console.log("gamming laptop");
// }else{
//   console.log('mac');
//}

// for (i = 581; i <= 623; i++) {
//   console.log(i);
//   if (i === 600) {
//     break;
//   }
// }
const myBookPrice = [11, 200, 222, 34, 456, 3, 27];

for (let i = 0; i < myBookPrice.length; i++) {
  let upto200 = myBookPrice[i];
 
  if (upto200 > 200) {
    continue;
  }
  console.log(upto200);
}
