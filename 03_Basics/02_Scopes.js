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

