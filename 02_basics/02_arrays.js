const animals = ["Dog", "Cat", "Lion", "Goat"]
const birds = ["Parrot", "Crow", "Pegion", "Peacock"]

// animals.push(birds)

// console.log(animals);
// console.log(animals[4][2]);

const Animal_with_Birds = animals.concat(birds)
// console.log(Animal_with_Birds);

const using_spread_method = [...animals, ...birds]
// this method is useful as we can combine more than two arrays
// console.log(using_spread_method);


const complex_array = [1,2,3,4,[5,6,7,[8,9]], 10, [11]]
// console.log(complex_array);

// to merge all the recursive array according to the depth as user want -> .flat() method can be used
const simplified_array = complex_array.flat(Infinity)
// console.log(simplified_array);

// console.log(Array.isArray("Vishal"));
// console.log(Array.from("Vishal"));
// console.log(Array.from({name : "Vishal"})); // interview pov

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));