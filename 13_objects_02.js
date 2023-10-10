// const tinderUser = new Object() --> singleton object

const tinderUser = {} // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

let regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Vedant",
            lastname : "Nawale"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

let obj1 = {1: "a", 2:"b"}
let obj2 = {3: "a", 4:"b"}
let obj5 = {5: "a", 6:"b"}

// let obj3 = {obj1, obj2}
let obj3 = Object.assign({},obj1,obj2, obj5) // target {}, source --> obj1,obj2
console.log(obj3);
obj4 = {...obj1, ...obj2, ...obj5} // spread operatorss
console.log(obj4);


// database

let users = [
    {
        id : 1, 
        email : "ab@gmail.com"
    },
    {
        id : 1, 
        email : "ab@gmail.com"
    },
    {
        id : 1, 
        email : "ab@gmail.com"
    },
    {
        id : 1, 
        email : "ab@gmail.com"
    }
] 

// console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));