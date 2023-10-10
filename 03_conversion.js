// Datatype Conversion

// let score = "33abc" // NaN
// let score = null // 0
// let score = undefined // NaN
let score = true


console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof (valueInNumber)) // conversion
console.log(valueInNumber) // NaN --> Not a Number

let isLoggedin = "om"

let booleanIsLoggedIn = Boolean(isLoggedin)
console.log(booleanIsLoggedIn)