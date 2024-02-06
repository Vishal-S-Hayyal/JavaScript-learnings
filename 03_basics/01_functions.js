function sayMyName(){
    console.log("V");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("l");
}
// sayMyName()

function add (number1, number2){  // here number1,number2 are called parameters which are declared while creating functions
    //multiple types to print result
    // console.log(number1+number2);

    // let result = number1 + number2
    // return result

    // return number1 + number2
}

// add(3,4) // here 3 and 4 are arguments which are passed as values for parameters
const result = add(4,5)

// console.log("Result : ", result);

function loginUserMessage (username){
    if( /*username === undefined*/ !username){
        console.log("Please enter the username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());
