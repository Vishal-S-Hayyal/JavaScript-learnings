// Date

let myDate = new Date()


console.log(myDate);
// These are few functions available for Date method 
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());
console.log(typeof(myDate));
// Datatype of Date is Object

let createdDate = new Date("2024-01-12")
// let createdDate = new Date(2024-5-24)
console.log(createdDate.toDateString());
console.log(createdDate.toLocaleString());

let myTimestamp = Date.now()
console.log(myTimestamp);
console.log(createdDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday : "long",
})