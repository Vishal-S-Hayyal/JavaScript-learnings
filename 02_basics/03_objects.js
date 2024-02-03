//singleton
// Object.create()

// object literals

const mySym = Symbol("Key")

const jsUser = {
    name : "Vishal",
    // mySym : "Key1", // type of this symbol declaration is string
    [mySym] : "Key2",
    age : 20,
    location : "Chennai",
    isLoggedin : false,
    lastLoggedinDays : ["Monday", "Saturday"]

}

// console.log(jsUser.age);
// console.log(jsUser["age"]);
// console.log(typeof jsUser[mySym]);

jsUser.location = 'Banglore'
Object.freeze(jsUser)
// console.log(jsUser);
jsUser.location = 'Chennai'
console.log(jsUser);