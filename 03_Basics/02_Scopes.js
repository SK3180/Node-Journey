//var c = 300
let a = 200
if(true){
    let a = 10 // Block Scope 
    const b = 20 // Block Scope 
    var c = 30 // Global  Scope 
    console.log("INNER:",a )
}
console.log(a)
//console.log(b)
console.log(c)

// nested Scopes

function one(){
    const username = "Sk"
    function two(){ 
    const email = "Sk3180@gmail.com" 
    console.log(username)
    }
   // console.log(email) // email is not accessable in this scope

    two()
}

// one()

if(true){
    const userName = "Sachin"
    if(userName === "Sachin"){
        const website = " youtube"
        console.log(userName + website)
    }
  //  console.log(website) // showing errors
}
// console.log(userName) // showing errors


// ******************** Interesting ***********************


//console.log(addone(10))
function addone(num){
    return num + 1
}
console.log(addone(10))

//console.log(addTwo(11))

const addTwo = function(num){  // also known as expression
    return num + 2
}

console.log(addTwo(11))
