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

console.log(test)





