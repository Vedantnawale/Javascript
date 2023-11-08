class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){
        return '123'
    }
}

let vedant = new User("vedant")
// console.log(vedant.createId()) // if we make createId static the it will not run. Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

let iphone = new Teacher("iphone", "i@phone.com") 
iphone.logMe()
console.log(iphone.createId())