const userEmail = []

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

//Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN 

//Truthy Values
// "0", "false", " ", [], {}, functiion(){}

if(userEmail.length === 0){
    console.log("Array is empty");
}

const empObject = {}

if(Object.keys(empObject).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 // Output-> 5
// val1 = null ?? 10 // Output -> 10
// val1 = undefined ?? 15 // Output -> 15
val1 = null ?? 10 ?? 20 // Output -> 10

console.log(val1);

// Ternary Operator 

// Condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");;