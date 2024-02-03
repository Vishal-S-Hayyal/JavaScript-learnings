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
// console.log(typeof jsUser[mySym]); //sometimes it is better to access attributes of objects using square bracket INTERVIEW POV 

jsUser.location = 'Banglore'
// Object.freeze(jsUser)
// console.log(jsUser);
jsUser.location = 'Chennai'
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello jsUser");
}
// console.log(jsUser.greeting);

jsUser.greetingTwo = function(){
    console.log(`Hello jsUser, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());