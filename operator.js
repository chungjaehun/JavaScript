// 1. Use strict
// added in ES 5
// use this for valina Javascript
'use strict';

// 1. string concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1+2}`);

// 2. numberic operators
console.log(1+1); // add
console.log(1-1); // substract
console.log(1/1); // divide
console.log(1*1); // multiply
console.log(5%2); // remainder
console.log(2**3); // exponentiation

// 3. Increment and Decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, `)

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y;
x *= y;
x /= y;

// 5. comparion operators
console.log(10<6);  // less than
console.log(10<=6); // less than or equal
console.log(10>6) ; // greater than
console.log(10>=6); // greater than or equal

// 6. logical operators: ||(or), &&(and), !(Not)
const value1 = false;
const value2 = 4 < 2 ;

// ||(or), finds the first trhthy value
console.log(`or: ${value1 || value2 || check()}`);

function check(){
  for (let i = 0 ; i < 10 ; i++){
    // wasting time
    console.log('hi')
  }
  return true;
}

// && (and), find the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject, soemthing

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log (stringFive === numberFive);
console.log (stringFive !== numberFive);

// object equality by reference
const ellie1 = {name : 'ellie'};
const ellie2 = {name : 'ellie'};
const ellie3 = ellie1;
console.log (ellie1 == ellie2);
console.log (ellie1 === ellie2);
console.log (ellie1 === ellie3);

// equality = puzzler
console.log (0 == false);
console.log (0 === false);
console.log ('' == false);
console.log ('' === false);
console.log (null == undefined);
console.log (null === undefined);

// 8. conditional operator : if
// if, else if, else
const name = 'ellie';
if (name === 'ellie'){
  console.log('Welcome, Ellie!');
} else if (name === 'coder'){
  console.log('You are amazing coder');
} else {
  console.log('unkown');
}

// 9. ternary operator : ?
// condition ? value1 : value2 ;
console.log (name === 'ellie' ? 'Yes' : 'No');

// 10. switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple tpye checks in TS
const browser = 'IE';
switch (browser){
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default: 
    console.log('same all!');
    break;
}

// 11. loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`While: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for (begin; condition; step)
for (i = 3 ; i > 0; i--){
  console.log(`for: ${i}`);
}

// nestde loops
for (let i =0; i < 10 ; i++){
  for (let j =0; j< 10;j++){
    console.log(`i: ${i}, j: ${j}`)
  }
}

//break, continue
// Q1. iterate from 0 to 10 and print only even numbers
// (use continue)
for (i =0; i < 11 ; i++){
  if (i % 2 !== 0){
    continue;
  }
  console.log(`even numbers: ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8
// (use break)
for (i=0; i<11;i++){
  if (i===8)
  {
    break;
  }
  console.log(`numbers: ${i}`);
}







