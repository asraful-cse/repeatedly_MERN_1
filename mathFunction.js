const num1 = 25;
const num2 = 45;
const gap = num1 - num2;
// console.log(gap); // expected : -20

const finalDefference = Math.abs(gap);
// console.log(finalDefference);

const number1 = 5.5;
// console.log(Math.round(number1)); // 5
const number2 = -5.5;
// console.log(Math.round(number2)); // -5

// console.log(Math.round(5.4), Math.round(-5.6)); // 5 -6 etc


// ciel, floor, random and showap---------

const number = 3.443;
const ceilNumber = Math.ceil(number);
// console.log(ceilNumber);

const floorNumber = Math.floor(number);
// console.log(floorNumber);


// math random for loop-------------
for (i=0; i<5; i++){
    const randomNumber = Math.floor(Math.random()*5);
    console.log(randomNumber);
}

