// const tinderUser = new Object() // singleton declaration
const tinderUser = {}

tinderUser.id = "12@abs"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "Some@gmail.com",
    fullName : {
        userFullname : {
            firstName : "Rajat",
            lastName : "Choudary"
        }
    }
}

// console.log(regularUser.fullName.userFullname.firstName);

const obj1 = {1 : "a", 2: "b"}
const obj2 = {3 : "c", 4: "d"}
// const obj3 = {obj1, obj2}
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2) // giving empty parenthesis inside assign function is a good practise 
// console.log(obj3);

const obj3 = {...obj1, ...obj2} //This is called spread method
// console.log(obj3);

const users = [
    {
        id : 1,
        email : "v@gmail.com"
    },
    {

    },
    {

    },
    {

    }
]
// user is a array containing multiple objects
// To access them we have to use indexing
// console.log(users[0].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // This is used to avoid crases due to missing values


