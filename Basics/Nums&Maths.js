const score = "203"


const value = new Number(score);

console.log(score,typeof score,value, typeof value)

console.log(value.toFixed(2))

const otherNumber = 23.9273

console.log(otherNumber.toPrecision(2))


const newNum = 10000
console.log(newNum.toLocaleString('en-IN'))
const valueee = Number.MIN_VALUE

console.log(valueee)


// ***************************** Maths *****************************************


console.log(Math)
console.log(Math.abs(-4)) // abs turns negative to positive
console.log(Math.round(4.4)) // round off
console.log(Math.ceil(4.4))  // top value 
console.log(Math.floor(4.4)) // bottom value 

console.log(Math.min(3,1,23,4,1)) // minimum value
console.log((Math.random()*10)+1)


//trick

const min = 10
const max = 20

console.log(Math.floor((Math.random() *(max-min+1))+min))




