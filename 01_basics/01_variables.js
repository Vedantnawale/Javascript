const accountId = 14432  // no change
let accountEmail = "iam@google.com" // global scope
var accountPassword = "12345" // block scope
accountCity = "Jaipur"
let accountState;

// accountId = 2 --> not allowed
accountEmail = "iam@gmail.com"
accountPassword = "54321"
accountCity = "Mumbai"

/*
not to use of var
bcoz of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])