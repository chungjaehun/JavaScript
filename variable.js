// 1. Use strict
// added in ES 5
// use this for valina Javascript
'use strict';

// 2. Variable
// favor mutable data
// let (added in ES6)
let globalName = 'golobal name';
{
  let name ='ellie';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// 3. Contants
// favor immutable data type always for a few reasons;
//  - security : 보안
//  - thread safety
//  - reduce human mistakes


// 4. variable types
// primitive, string item : number, string, boolean, null, undefied, symbol
// object, box container
// function, first-class function => function은 다른 data type과 동일하게 변수할당이 가능하고, 함수의 파리미터값으로 전달이 가능하고, 리턴 type으로도 가능하다.


// number
// javaScript는 숫자는 number 타입이다. javaScript는 Dynamic type으므로
// let a = 14; 로 적용하면 된다.

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);
111

// string
const char="c";
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals(string)
console.log(`valie: ${helloBob}, type:${typeof helloBob}`);

// boolean
// false : 0, rull, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3<1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
// 사용자가 빈 값을 할당한 것이다.
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
// 정의되지 않는 상태
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 =Symbol('id');
const symbol2 =Symbol('id');
console.log(symbol1===symbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// 5. dynamic typing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type:${typeof text}`);
text =1;
console.log(`value: ${text}, type:${typeof text}`);
text='7'+5;
console.log(`value: ${text}, type:${typeof text}`);
text='8'/'2';
console.log(`value: ${text}, type:${typeof text}`);
// console.log(text.charAt(0));  // error 발생 text는 숫자 변수이기 때문에

// object, real-life object, data structure
const ellie = { name :' ellie', age : 20};
ellie.age = 21;
console.log(`name: ${ellie.name}, age:${ellie.age}`);
