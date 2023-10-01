// Stack and Heap Memory

// Stack (Primitive), Heap (Non-Primitive)

let myYtname = "altimo.com"

let anothername = myYtname

anothername = "mystery.com"

console.log((myYtname));
console.log(anothername);

let userOne = {
    email : "user@google.com",
    age : 20
}

let userTwo = userOne

userTwo.email = "veda@google.com"

console.log(userOne.email);
console.log(userTwo.email);