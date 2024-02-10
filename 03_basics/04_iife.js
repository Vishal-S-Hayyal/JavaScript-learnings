// Immediately Invoked Function Expressions (IIFE)


// Named IIFE
(function one(){
    console.log("DB CONNECTED");
})();  // Semicolon is compulsory to stop the invoked function


// IIFE is used to avoid global scope pollution

// Unnamed IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Vishal")

