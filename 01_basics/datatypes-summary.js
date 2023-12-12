// In javaScript there are two types of datatypes are available 
// those are
// Primitive and Refrence Type(Non Primitive)

/* Primitive
7 Types : Number, String, Boolean, null, unspecified, symbol, BigInt 
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
// console.log(isLoggedIn);

let userEmail

const id = Symbol('123')
const newId = Symbol('123')

//console.log(id === newId);
//this will return false because symbol is unique

const bigNumber = 3653876187312673786398123986n
console.log(bigNumber);

// console.log(id === newId);

/* Reference (Non Primitive)
3 Types : Arrays, Objects, Functions
*/

const fruits = ["Mango", "Banana", "Watermelon"];

let myObj = {
    name: "Vishal",
    age: 21,
}

console.log(myObj);
console.log(fruits);


const myFunction = function(){
    console.log("Hello World");
}


