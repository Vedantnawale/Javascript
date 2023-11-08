// Understanding The Object on the basis of prototype
function muliplyByFive(num) {
    return num * 5
}
muliplyByFive.power = 2

console.log(muliplyByFive(5));
console.log(muliplyByFive.power);
console.log(muliplyByFive.prototype);

function createUser(username, score) {
    // username = username // to avoid we use this prototype
    this.username = username
    this.score = score
}

createUser.prototype.increment = function () {
    this.score++
}

createUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`);
}



let chai = new createUser("Chai", 25)
let tea = new createUser("tea", 250)

chai.printMe()

// Note :- this matlab jisne bhi call kiya current context

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/