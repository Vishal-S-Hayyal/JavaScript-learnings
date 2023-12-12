const name = "Vishal";

const repoCount = 24;

// console.log(name + repoCount + 'Value');
// not recommended

// (`) -> Backtick
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Lonewolf");

console.log(gameName[0]);
// output -> L

// syntax to define or access prototypes
console.log(gameName.__proto__);
// output -> {}

// some protoypes can be defined without this syntax
console.log(gameName.length);
//Output -> 8

console.log(gameName.toUpperCase());
//Output -> LONEWOLF