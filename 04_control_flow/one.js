//if

const isUserLoggedIn = true
const temperature = 41

// if(temperature < 50) {
//     console.log("Temperature is lesser than 50");
// }
// else{
//     console.log("Temperatue is greater than 50");
// }

// Operators
// >, <, <=, >=, ==, !=, ===(typechecking)

const score = 200

if(score > 100){
    const power = "fly"
    // console.log(`User power : ${power}`);
}
// console.log(`User power : ${power}`);

const balance = 1000 

//Implicit scoping
// if(balance>500) console.log("test");

const userLoggedIn = true
const debitcard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if(userLoggedIn && debitcard){
    console.log("Allow to buy");
}

if(LoggedInFromEmail || LoggedInFromGoogle){
    console.log("UserLoggedIn");
}