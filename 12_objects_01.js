// singleton --> if we make object using constructor not object literals 
// Object.create

//  object literals

let mySym = Symbol("key1")

let jsUser = {
    name : "Vedant",
    "full name" : "Vedant Nawale",
    // mySym : "myKey1",
    [mySym]: "myKey1", // This used for declaring symbols
    age : 20,
    location : "yavatmal",
    email : "abc@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
} 
// console.log(jsUser.email);
// console.log(jsUser["email"]); // this is safe method --> square notation

// console.log(jsUser.full name); we cant access
// console.log(jsUser["full name"]);

// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

jsUser.email = "abc@google.com" // for change
// console.log(jsUser);
// Object.freeze(jsUser) // you cant change the value
jsUser.email = "abc@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js User");
}
jsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`); // this used for same object ko reference dene ke liye
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
