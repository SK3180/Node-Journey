
const user = {
    username:"Sk",
    price: 6969,
    
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`) // this for accessing current context
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username  = "Sam"
// user.welcomeMessage()

//console.log(this); // this refers to empty object as there is no global 


// function chai(){
//     let username = "Sk"
//     console.log(this.username)
// }
// chai()


// const chai = function(){
//     let username = "Sk"
//     console.log(this.username)
// }

// arrow function

const chai = () => {
    let username = "Sk"
    console.log(this)
}
// chai()

//basic syntax of arrow funciton -  () => {}

    // const addTwo = (num1,num2) => {
    //     return num1 + num2
    // }

    // const addTwo = (num1,num2) =>  num1 + num2
    // const addTwo = (num1,num2) =>  (num1 + num2)  // implecit return (mean it assume and we dont have to write return keyword)
    
    const addTwo = (num1,num2) => ({username:"Sk Singh"}) 

   console.log(addTwo(5,6));


//    const myArray = [ 1,2,3,4,5]

//    myArray.forEach()