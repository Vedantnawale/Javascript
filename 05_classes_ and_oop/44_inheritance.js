// The constructor method is a special method of a class for creating and initializing an object instance of that class.
class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
// Teacher Childclass where User is parentclass
class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`new course was added by ${this.username}`);
    }
}

let chai = new Teacher("chai", "chai@gmail.com","123")

chai.logMe()

let masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai === Teacher);
console.log(chai instanceof Teacher);