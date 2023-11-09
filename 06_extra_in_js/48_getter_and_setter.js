class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email (value){
        this._email = value // set are iterable that's why we dont use return in set
    }
    
    get password(){
        return `${this._password}`
    }

    set password(value){
        this._password = value
    } 
}

let vedant = new User("vn@gm.com", "abc")
console.log(vedant.password);