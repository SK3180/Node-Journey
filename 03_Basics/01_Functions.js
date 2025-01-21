// console.log("S")
// console.log("A")
// console.log("C")
// console.log("H")
// console.log("I")
// console.log("N")


function print_name(name){
    console.log(name)
}

print_name("SK")


// function add_number(num1,num2){ //parameters
//     let sum = num1 + num2
//     console.log(`Sum of ${num1} and ${num2} = ${sum}`)
// }

function addTwoNumbers(num1,num2){
    return num1 + num2
}

const result =  addTwoNumbers(10,20) // arguments

// console.log("Result",result )


function loginUserMessage(userName){ // we can also predefine value to userName
    if(userName!= null){
     return `${userName} just logged In`
    }
    else
    {
        console.log("Please Enter a userName")
    }
}
const test =  loginUserMessage("Sk")
const test2 =  loginUserMessage()

// console.log(test)


function calculateCartPrice(val1,val2,...price1){   // ... is rest operator also known as spread operator, it packs all the value in the bundle and show to store
    return price1 
} 

// console.log(calculateCartPrice(200,400,400,200))

const user = {
    username: "Sk",
    prices:299
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`)
}

//handleObject(user)
handleObject({
    username: "Sam",
    prices:699
})

const myNewArray = [ 200,100,199,203]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([200,397,201,348]))


