// array

let myArr = [0,1,2,3,4,5]
let myHeros = ["shaktiman", "ironman", "thor"]
let myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1]);

// Array Methods

myArr.push(6)
console.log(myArr);
myArr.push(7) // last madhe add hote
console.log(myArr);
myArr.pop() // last madhla element remove hote
console.log(myArr);

myArr.unshift(9)
console.log(myArr);
myArr.shift()
console.log(myArr);
console.log(myArr.includes(9));
console.log(myArr.indexOf(9)); // -1
console.log(myArr.indexOf(5)); // 0 se start

let newArr = myArr.join()
console.log(myArr);
console.log(typeof newArr);

// slice, splice

console.log("A ", myArr);

let myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);

let myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);