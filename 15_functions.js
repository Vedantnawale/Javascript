
function sayMyName(){
    console.log("V");
    console.log("E");
    console.log("D");
    console.log("A");
    console.log("N");
    console.log("T");    
}

// sayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2);
// }
function addTwoNumbers(num1,num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}
let result = addTwoNumbers(4,7)

// console.log("Result ", result);

// jo function ke defination andar hota he use parameter bolte hai
// jb function ko call karte hai tb uske andar wale ko argument bolte hai 


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter an username")
        return
    }
    return`${username} just logged in`
}
// console.log(loginUserMessage("Vedant"))
console.log(loginUserMessage())