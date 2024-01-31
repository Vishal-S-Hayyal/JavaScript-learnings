const score = 400
console.log(score);

const balance = new Number (100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));

const x = 1000000
console.log(x.toLocaleString('en-In'));
//default it will give number according to U.S standard

// +++++++++++++ MATHS ++++++++++++++
console.log(Math);
console.log(Math.abs(-3));
console.log(Math.round(3.44449));
console.log(Math.floor(132.89));
console.log(Math.ceil(78.187));
console.log(Math.min(3,4,2,5,7));
console.log(Math.max(4,4,5,1,9,12));

console.log(Math.random());
console.log((Math.random()*10)+1); // to avoid 0
console.log(Math.floor((Math.random()*10)+1)); //to get integer

//If we want random integer between a range
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1))+min);

