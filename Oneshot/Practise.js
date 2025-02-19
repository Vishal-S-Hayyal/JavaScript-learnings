// Practise q1
// for(num=0; num<=100; num++){
//     if(num%2 == 0){
//         console.log(num);
        
//     }
// }

// // Practise q2
// let gameNum = 25;
// let userNum = prompt("Guess a number:")

// while(userNum != gameNum ){
//     userNum = prompt("Wrong guess,guess again!:");
// }
// console.log("Congratulations you guessed correct number");

// Practise q3
// userName = prompt("Enter your name");

// newuserName = "@"+userName+userName.length;
// console.log(newuserName);

// Practise q4
// let marks =[85,97,44,37,76,60]
// let sum = 0;

// for(let val of marks){
//     sum += val;
// }

// let average = sum/marks.length;
// console.log(average);

// const arrowmul = (a,b) =>{
//     return(a*b);
// }

// Practise q5
// function countVowels(str){
//     let ans=0;
//     for(let i=0; i<str.length; i++){
//         if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
//             ans ++;
//         }
//     }
//     return ans;
// }

// let val = countVowels("aaa");
// console.log(val);

// let arrfunc = (str) => {
//     let ans=0;
//     for(let i=0; i<str.length; i++){
//         if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
//             ans ++;
//         }
//     }
//     return ans;
// }

// let val = arrfunc("az");
// console.log(val);

// let arr = [1,2,3,4];

// arr.forEach((val)=>{
//     val=val*val;
//     console.log(val);
    
// })

// Practise q6
// let arr = [87,93,64,99,86];

// let newarr = arr.filter((val)=>{
//     return val>90;
// })

// console.log(newarr);

// Practise q7
let n = prompt("Enter a value");

let arr =[];

for(let i=1; i<=n; i++){
    arr[i-1]=i;
}
let ans = arr.reduce((res,curr)=>{
    return res+curr;
})
console.log(ans);

