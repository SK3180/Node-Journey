const userEmail = "Sk@gmail.com"
const test2 = []
// truthy means when it assume it is right value
if(userEmail){
    console.log("Got User Email")
}else {
    console.log("Don't have user email")
}

// Falsy Values

// -> false
// -> 0
// -> -0
// -> BigInt
// -> 0n
// -> ""
// -> null
// -> undefined
// -> Nan

// Truthy Values

// -> "0"
// -> 'false'
// -> " "
// -> []
// -> {}
// -> function(){} // empty function

if(test2.length === 0){
    console.log("Array is empty")
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}


// Nullish Coalescing Operator (??): null undefined

let val1 

val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 15


console.log(val1)

// Terniary Operator

// condition ? true ?? false

const iceTeaPrice = 100
iceTeaPrice <= 60 ? console.log("Less then 60") : console.log("More then 60")