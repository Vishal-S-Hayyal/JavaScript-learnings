

if(true){
    const a = 10
    let b = 20
    var c = 30 //var datatype defy's the logic of scopes 
}

// console.log(a);
// console.log(b);
// console.log(c);

// variables declared inside any loops,objects,functions will be bound to that specific scope,so they are called blockscope
// variables declared outside indipendently are called globalscope variables

function one(){
    const username = "Vishal"
    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    // two()
}
// one()

// Child function can access attributes of parent function but vice versa is not true

function addone(num){
    return num+1
}
addone(4)


//concept of hosting which means we cann't use constants before executing functions
const sum = function addtwo(num){
    return num+2
}
addtwo(5)

