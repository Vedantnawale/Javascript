// hoisting means agar declaration ke pahle function ko run karna
function one(){
    let username = "vedant"
    function two(){
        let website = "youtube"
        console.log(username);
    }
    // console.log(website); throws error

    two()
}
// one()

if (true){
    let username = "vedant"
    if(username === "vedant"){
        let website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// Interesting

console.log(addone(5))
function addone(num){
    return num + 1
}


// addTwo(5) // it gives error
let addTwo = function(num){
    return num + 2
} // also known as expression
addTwo(5)
