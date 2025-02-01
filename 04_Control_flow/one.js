// Control Flow

// if 

const isUserLoggedIn = true
const temperature = 12

if (temperature<50){
    console.log("Less then 50")
}
else
{
    console.log("TemperatureMore then 50")
}

if(2 == "2"){
    console.log("2 == 2, 1st")
}
if(2 === "2"){
    console.log("2 === 2, 2nd")
}
// <, >, <=, >=, ==, !=, === , !==

// === this also check the data type of variable

// !==  this check now equals also datatype


const balance = 1000

// if(balance > 500) console.log("Test") // implesit scope (bad code)

// if(balance > 500){
//     console.log("greater then 500")
// } else if(balance<500){
//     console.log("Balance is less then 500")
// }

const UserLoggedIn = true
const debitCard = true

if(UserLoggedIn && debitCard){
    console.log("Allow to buy")
}






