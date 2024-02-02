// Arrays

const myArr = [1, 2, 3, 4, 5]
const fruits = ["Apple", "Banana", "Mango", "Orange"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[0]);
// console.log(fruits[2]);

// Array Methods

myArr.push(6)
// console.log(myArr);
myArr.pop()
// console.log(myArr);

myArr.unshift(0) //This method is used to insert a value at the beginning
// console.log(myArr);
myArr.shift() //This works like pop for unshift
// console.log(myArr);

// console.log(myArr.includes(2));
// console.log(myArr.indexOf(2));

const newArr = myArr2.join()
// console.log(myArr2);
// console.log(newArr);
// console.log(typeof(newArr));

// SLICE and SPLICE
const arr = [0, 1, 2, 3, 4, 5]
console.log(arr);

const arr_slice = arr.slice(1,3)
console.log("Printing sliced array :", arr_slice);
console.log("Printing original array after sliced:", arr);

// SPLICE not only includes last value but also it makes change in original array
const arr_splice = arr.splice(1,3)
console.log("Printing spliced array :", arr_splice);
console.log("Printing original array after spliced:", arr);