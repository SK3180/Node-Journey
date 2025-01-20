
// variables - var, const, let

// var  -  mutable variable (value can be changed)
// const - imutable variable (value cannot be changed)
// let - fixed the scope problem as it works with the Scope -> {}

// prefer not to use var because of scope problem as it works as global variable , we must use const and let

var message = "Hello Sirji"
const accountId = 12839
let accoutEmail = "Sk@gmail.com"
var accountPassword = "Hello"
let accountState // this will show as undefined

// accountId = 230 (Not Allowed)
accoutEmail = "google@gmail.com"
accountPassword = "Password"

console.table([accountId,accoutEmail,accountPassword,accountState]) // show data in tabular form with index
//console.log(accountId) 

