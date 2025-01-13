

let myDate = new Date()

console.log("Start Here")
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toTimeString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate) // object type

let myCreatedDate = new Date(2023,0,11,15,4,20) // custom Date format
console.log(myCreatedDate.toLocaleString())
// let myCreatedNewDate = new Date("2022-01-07")
let myCreatedNewDate = new Date("07-11-2003")
console.log(myCreatedNewDate.toLocaleString())


let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(myCreatedNewDate.getTime()) // current time
console.log(Math.floor(Date.now()/1000)) // seconds

let newDate = new Date()
console.log(newDate.getMonth()) // Month start from 0 -> Jan
console.log(newDate.getDay()) 

console.log(newDate.toLocaleDateString('default',{
    weekday: "long"
}))






