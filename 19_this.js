// this - current context ko refer karta hai
let user = {
    username : "vedant",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "om"
// user.welcomeMessage()

// console.log(this);

// function one (){
//     let username = "vedant"
//     console.log(this.username);
// }
// one()
// **************** Arrow Function *******************

// let one = function one (){
//     let username = "vedant"
//     console.log(this.username);
// }
// one()

let one = () => {
    let username = "vedant"
    console.log(this.username);
}
// one()

let addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(6,8))

// Implicit return

// let checkTwo = (num1, num2) => num1 + num2
// let checkTwo = (num1, num2) => ( num1 + num2 )
let checkTwo = (num1, num2) => ({username : "vedant"})

console.log(checkTwo(6,8))