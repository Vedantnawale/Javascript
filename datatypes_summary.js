/*
data types divided into two types primitive and non-primitive

//  Primitive

//  7 Types : String, Symbol, Number, Null, Boolean, BigInt, undefined

// Reference Type / Non-Primitive

// Arrays, Objects, Functions
 
*/

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 891283819n;
console.log(typeof(bigNumber))

const heros = ["shaktiman", "nagraj", "doga"] // --> array
const myObject = {
    name : "Vedant",
    age : 20
} // --> Object

let myFunction = function () {

    console.log("Hello World");    
}
console.log(typeof(heros))
console.log(typeof(myObject))
console.log(typeof(myFunction))