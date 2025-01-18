// Singleton -> Create only 1 type of object(if creates from constructor then its singleton)

// Object literals -> it create multiple instance 

//Object.create // Constructor (Singleton method) 

const MySym = Symbol("Key1")

const Js_User = {
    name:"Sk",
    "Full Name" : "Sachin Singh",
    age:21,
    [MySym]:"MyKey1", // square brackets are use for using a diff variable as key
    location: "Delhi",
    email: "Sksingh@gmail.com",
    isLoggedIn:false,
    lastLoginDays : ["Monday","Friday"]
} //object literals

console.log(Js_User.email)
console.log(Js_User["email"])
console.log(Js_User["Full Name"])
console.log(Js_User[MySym]);
console.log(typeof Js_User[MySym]);


Js_User.email = "Sk@gmail.com"
// Object.freeze(Js_User) // this will freeze the vales so that it cannot be changed
Js_User.email = "Sk3180@gmail.com" // this is not perform as freeze is there
console.log(Js_User)


// Functions

Js_User.greeting = function(){
    console.log("Hello World")
}

Js_User.greeting2 = function(){
    console.log(`Hello ,${this.name}`)
}

console.log(Js_User.greeting())
console.log(Js_User.greeting2())






