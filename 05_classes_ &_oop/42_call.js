function setUSerName(username){
    // Complex DB Calls
    this.username = username
    console.log("called ");
}
function createUser(username, email, password){
    setUSerName.call(this, username)

    this.email = email
    this.password = password
}

let chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

// call --> current execution context kisi or function ko pass kar deta hai