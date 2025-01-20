// Premitive & non premitive, kis way me value ko rakha jata ha and usse access kara jata ha 

// Premitive :- 
// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt   


const score = false

const id = Symbol("123")
const id2 = Symbol("123")

let check = (id===id2)
console.table([id,id2,check])


// Non Premitive (Reference type)

// Arrays, Objects, Functions


const heros = ["Shaktiman","Ironman","Dogesh"]
let myObj = 
{
    name: "Sk",
    age: 22,
}

const myFunction =  function(){
console.log("Namaste World")
}
myFunction()

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.




// ******************************* Memories ***********************

// Stack (Primitive), Heap (Non-Primitive)

// Stack - Copy of value(make a copy of the value and work on it)

// Heap - Reference of Value (if change value then it reflect in the main value)


let myYoutubename = "JustSkThings"

let anotherName = myYoutubename
anotherName = "JustSkPlayz"

console.log(myYoutubename)
console.log(anotherName)

let user =  {
    email: "SK@gmail.com",
    name : "SkSingh"
}

let user2 = user

user2.email = "goat@gmail.com"
user2.name = "GOAT"


console.log(user)
console.log(user2)