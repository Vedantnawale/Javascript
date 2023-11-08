// let myName = "Vedant    "
// let myChanel = "chai    "
// // for this we cant use trim repeatetly
// // console.log(myName.trim().length); // or
// console.log(myName.trueLength); 

let myHeros = ["Thor", "Hulk", "Captain", "SpiderMan", "IronMan"]

let heroPower = {
    Thor : "hammer",
    SpiderMan : "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.SpiderMan}`);
    }
}
Object.prototype.vedant = function(){
    console.log(`vedant is present in all objects`);
}
Array.prototype.heyvedant = function(){
    console.log(`vedant says hello`);
}
// heroPower.vedant()
myHeros.vedant() 
myHeros.heyvedant()
// heroPower.heyvedant()  see the difference 

// Inheritance

let User = {
    name : "chai",
    email : "chai@google.com"
}
let Teacher = {
    makeVideo : true
}

let TeachingSupport = {
    isAvailable : false
}

let TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode   "

String.prototype.trueLength = function(){ 
    console.log(`${this}`);
    console.log(`True Length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"vedant".trueLength()
"iceTea".trueLength()