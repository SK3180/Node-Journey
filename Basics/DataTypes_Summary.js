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