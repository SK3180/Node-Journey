// arrays

const myArr = [0,1,2,3,4,5,6,"true","Sk"] 
// collection of multiple item in a variable , its resizeable


const myArr2 = new Array(1,2,34,4)
console.table(myArr)
console.log(typeof myArr)
console.log(myArr2)


// Array methods

myArr.push(3) // push value to the array
myArr.push("Hello")
myArr.pop() // removes last value of the array
//myArr.unshift(7) // add value at start of array
myArr.shift() //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

console.log(myArr.includes("Sk"))
console.log(myArr.indexOf("Sk"))


const newArr = myArr.join()

console.log(myArr)
console.log(newArr)


// slice , splice

// slice -> extract the value (does,nt manipulate the main array)

// splice -> manipulate the main array and remove the exctracted value
console.log("A",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);


const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);

