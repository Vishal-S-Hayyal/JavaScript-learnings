// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + "from Apna College students";
// console.dir(h2.innerText);

// let divs = document.querySelectorAll(".box");

// let id = 1;
// for(div of divs){
//     div.innerText = `new unique value ${id}`;
//     id++;
// }

// let butt = document.createElement("button");
// butt.innerText = "Click me"
// // console.log(butt);
// document.querySelector("div").append(butt);

// let h1 = document.createElement("h1");
// h1.innerHTML = "<i>Hi, I am new </i>";

// document.querySelector("body").before(h1);

// let butt = document.createElement("button");
// butt.innerText="Click me";
// butt.style.color="white";
// butt.style.backgroundColor="red";
// document.querySelector("body").prepend(butt);

// Question 2
// let para = document.querySelector("p");
// para.classList.add(".newclass");

//Event Handling

// let modebtn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let currmode = "light";

// modebtn.addEventListener("click", () => {
//     if(currmode==="light"){
//         currmode="dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }
//     else{
//         currmode="light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }

//     console.log(currmode);
    
    
// });

// //Objects and Classes

// let DATA = "Sample Data"
// class user {
//     constructor(name,email) {
//         this.name = name;
//         this.email = email;
//     }
//     viewData(){
//         console.log("Data = ", DATA);   
//     }
// }

// let student1 = new user("Vishal", "vishal@gmail.com")
// let student2 = new user("Axay", "Axay@gmail.com");

// class Admin extends user{
//     constructor(name, email){
//         super(name, email);
//     }
//     editData(){
//         DATA = "new Data";
//     }

// }

// let admin1 = new Admin("Vishal","Vishal@gmail.com");

const url = "https://www.reddit.com/r/news/.json";

const getdata = async () =>{
    let response = await fetch(url);
    console.log(response);
    let news = await response.json();
    let randomIndex = Math.floor(Math.random() * news.data.children.length);
    let singleNews = news.data.children[randomIndex].data.title;
    
    console.log(singleNews);
    
}