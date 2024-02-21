// For loops

for (let i = 0; i <=10; i++) {
    const element = i;
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(i + '*' + j + '=' + i*j);
    }
}

let myArray = [12,14,64,23,40]
// console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

for (let index = 0; index <= 10; index++) {

    if(index == 5){
        console.log(`Detected 5`);
        break;
    }

    console.log(`Value of i is ${index}`);
    
}
for (let index = 0; index <= 10; index++) {

    if(index == 5){
        console.log(`Detected 5`);
        continue;
    }

    console.log(`Value of i is ${index}`);
    
}