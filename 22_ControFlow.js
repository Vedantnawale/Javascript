// if

// let isuserLogedin = true
// let temparute = 41

// if (temparute < 50) {
//     console.log("less than 50");
// }
// else{
//     console.log("tempearure is grater than 50");
// }
// console.log("executed");
// <, >, >= , <=, ==, !=, ===

let balance = 50

if(balance==50) console.log(balance); // impicit scope

// switch case

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// access object in condition

// let myObj = {}

// if(Object.keys(myObj).length === 0){
//     console.log("Object is empty");
// }


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10

val1 = undefined ?? 10
val1 = null ?? 10 ?? 20

console.log(val1);

// Terinary Operator

// condition ? true : false

// note :- Nullish Coalescing Operator (??): The nullish coalescing (??) 
// operator is a logical operator that returns its right-hand side operand 
// when its left-hand side operand is null or undefined, and otherwise returns 
// its left-hand side operand.
