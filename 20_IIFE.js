// Immediately invoke Function Expression (IIFE)

(function one(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// global scope polution se problem hoti hai kai bar to us polution ko hatane ke liye use hota hai

( (name) =>{
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('vedant')