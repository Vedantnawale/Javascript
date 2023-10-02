// Dates
 
let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date(2023,0,23,5,3)
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now())/1000);

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());

// console.log(`${newDate.getDate().toString()} and the year is ${newDate.getFullYear()}`);

let weekDay= newDate.toLocaleString('default',{
    weekday:"long"
})
console.log(weekDay);
