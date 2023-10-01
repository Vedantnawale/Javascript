// let a = "hello"
// console.log(a + " world")

let name = "vedant"
let repoCount = 35

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`); // --> backtics -- string interpolation

let gameName = new String('vedantn')

console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

let newString = gameName.substring(0,4)
console.log(newString);

let anotherString = gameName.slice(-8, 4)
console.log(anotherString)

let newStringOne = " vedant "
console.log(newStringOne);
console.log(newStringOne.trim());

let url = "https://vedant.com"

console.log(url.replace('vedant', 'vedantnawale'));

// includes --> true or false
// split --> array