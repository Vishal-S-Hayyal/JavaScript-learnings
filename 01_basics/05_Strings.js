const name = "Vishal";

const repoCount = 24;

// console.log(name + repoCount + 'Value');
// output -> Vishal24Value
// not recommended

// (`) -> Backtick (string inerpolation)
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Lonewolf-BladeShadow");

// console.log(gameName[0]);
// output -> L

// syntax to define or access prototypes
// console.log(gameName.__proto__);
// output -> {}

// some protoypes can be defined without this syntax
// console.log(gameName.length);
//Output -> 8

// console.log(gameName.toUpperCase());
//Output -> LONEWOLF

// console.log(gameName.charAt(0));
// Output -> L

// console.log(gameName.indexOf('e'));
// Output -> 3

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-6,4)
// console.log(anotherString);
// Output = ne

const newStingOne = "   Vishal    "
// console.log(newStingOne);
// console.log(newStingOne.trim());
// Output -> Vishal
// Trim function is used to remove Whitespace Characters

const url = "https://vishal.com/vishal%20Hayyal"

// console.log(url.replace('%20', '-'));
// Output -> https://vishal.com/vishal-Hayyal

// console.log(url.includes('vishal'));
//output -> True


// console.log(gameName.split('-'))
// Output -> ['Lonewolf', 'BladeShadow']
