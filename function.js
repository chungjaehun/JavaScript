'use strict';

// Function
// - funclamental building block in the program.
// - subprogram can be used multiple times.
// - performs a take or calculates a value

// 1. function declaration
// function name ( param1, param2) { body... return;}
// one function === one thing
// naming : doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function isObject in JS
function printHello(){
  console.log('Hello');
}
printHello();

function log(message){
  console.log(message);
}
log('Hello');
log(1234);

// 2. parameters
// primitive parameters: passed by value.
// object parameters: passed by reference
function changeName(obj){
  obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);

// 3. default parameters (added un ES6)
function showMessage(message, from){
  if (from === undefined){
    from = 'unkown';
  }
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll (...args){
  for (let i =0; i < args.length; i++){
    console.log(args[i]);
  }
  // 간단한 for문
  for (const arg of args){
    console.log(arg);
  }
}
printAll ('chroam', 'coding', 'ellie')

// 5. Local scope
// 밖에서는 안이 보이지 않지만, 안에서만이 밖이 보인다.
let globalMessage = 'global'; // global variable
function printMessage(){
  let message = 'hello';
  console.log(message); //local variable
  console.log(globalMessage); 
  function printAnother(){
    console.log(message);
    let childMessage='hello';
  }
  // console.log(childMessage); // error
}
printMessage();

// 6. Return a value
function sum (a,b){
  return a+b;
}
const result=sum(1,2);
console.log(`sum: ${sum(1,2)}`);

// 7. early return, early exit
// bad
function upgradeUser(user){
  if (user.point > 10){
    // long upgrade logic...
  }
}

// good
function upgradeUser(user){
  if (user.point <= 10){
    return;
  }
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable.
// can be assigned as a value to variable.
// can be passed as an argument to other functions.
// can be returned by another function

// 1. function expression
// a function declaration can be called earlier than it is defiend. (hoised)
// a function expression us created when the execution reaches it.
const print = function(){
  console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using fuction expression
function randomQuiz(answer, printYes, printNo){
  if (answer === 'Love you') {
    printYes();
  } else {
    printNo();
  }
}
const printYes = function(){
  console.log('Yes');
}
const printNo = function(){
  console.log('No');
}
randomQuiz('wrong',printYes, printNo);
randomQuiz('Love you',printYes, printNo);

// arrow function
// always anonymous
// const simplePrint = function(){
//   console.log('simplePrint!');
// }
const simplePrint = () => console.log('simplePrint!');
const add = (a,b) => a + b;
const simpleMultiply = (a,b) => {
  // do something more
  return a*b;
}

// IIFE : Immediately Invoked Function Expression.
// 선언과 동시에 바로 실행한다.
(function hello(){
  console.log('IIFE');
})();

