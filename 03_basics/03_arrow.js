const user = {
    username : "Vishal",
    price : 999,

    welcomeMessage : function(){
        // console.log(`${this.username}, Welcome to website`); //this_method  executes according to current context, here inside the object
        // console.log(this);
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

//Global object for console in browser is window
//Global object for node environment is empty object
// console.log(this)

function one(){
    let username = "Vishal"
    console.log(this.username);
}
one()

// const one = function(){
//     let username = "Vishal"
//     console.log(this.username);
// }
// one()

// const one = () => {
//     username = "Vishal"
//     console.log(this.username);
// }
// one()

//Basic declaration of arrow function

// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4));

// const addTwo = (num1,num2) => (num1+num2) // When we use curly braces then we should use return keyword but no need if we use round braces
// console.log(addTwo(3,4));

