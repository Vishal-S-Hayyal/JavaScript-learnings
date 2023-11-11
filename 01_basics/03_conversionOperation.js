let score = "33"
// console.log(typeof score)
// console.log(typeof (score))

let valueInNumber = Number(score)

// console.log(typeof valueInNumber)

// javaScript conversion outputs for few examples when we use Number() function
// "33" => 33
// "33abc" => NaN (Not a number)
// true = 1 // false = 0
// Null = 0
// undefined = NaN

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// " " => false
// "Vishal" => true

let number = 33

let stringNumber = String(number)
// console.log(typeof stringNumber);


// *******************************OPERATIONS*******************************

let value = 3
let negValue = -value

// console.log(negValue);

// console.log(2+2);
// console.log(2*2);
// console.log(2-3);
// console.log(2**2);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Vishal"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);   //Whatever you write first in the console log it will be assumed to operate
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log((2 * 3) +( 4 % 2) - 1); // using paranthesis is the best practice 

// console.log(+true); //Output will be given as 1 beacuse it assumes you are doing arithmetic operation
// console.log(+""); // ""(empty) paranthesis gives 0 or false output

let gameCounter1 = 100
let gameCounter2 = 100
const prefix = ++gameCounter1
const postfix = gameCounter2++

console.log(prefix,gameCounter1); //Output (101,101)
console.log(postfix,gameCounter2); //Output (100,101)