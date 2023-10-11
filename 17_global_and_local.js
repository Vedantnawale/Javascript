var c = 300  // global scope
let a = 300  // local scope
// const b = 200 // cant take 

if (true){
    let a = 10
    const b = 20
    var c = 30   
    console.log("Inner : ", a);
} // block scope

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

console.log(a);
// console.log(b);
// console.log(c);