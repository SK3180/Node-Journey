const tinderUser = new Object()// singleTon object
const tinderUser2 = {} // non Singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sk"
tinderUser.adress = "Delhi"
tinderUser.isloggedIn = false


//console.log(tinderUser) 
// console.log(tinderUser2) 

const regularUser = {
    email : "ironman@gmail.com",
    fullname:{
        userfullName:{
            firstname:"Sk",
            lastname:"Singh"
        }
    }
}

// console.log(regularUser.fullname.userfullName.firstname)


const obj1 = {
    1:"A",
    2:"B"
}
const obj2 = {
    3:"C",
    4:"D"
}
const obj3 =  Object.assign({},obj1,obj2) // the empty object will become target and rest is source

const obj4 = {...obj1,...obj2} //  ... spread operator(Latest,most Used)
//console.log(obj4)


const users = [
    {
        id:1,
        userEmail:"Sk@gmail.com"
    },
    {
        id:2,
        userEmail:"Ak@gmail.com"
    },
    {
        id:3,
        userEmail:"SSk@gmail.com"
    },
    {
        id:4,
        userEmail:"Dk@gmail.com"
    },
]

const test = users[0].userEmail
console.log(tinderUser)
console.log(`user 1 = ${test}`)


console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isloggedIn')) // for checking if the required property is available or not



const course = {
    courseName:"Video Editing Expert",
    courseInstructor:"Sk",
    price:"6900"
}

// course.courseInstructor

const {courseName:Name} = course // Object Destructure

// console.log(courseName)
console.log(Name)

// const navbar = ({company}) => {     // for react onject destructure
    
// } 
// navbar(company = "Sk")

 //Json response (api)

// {                           
//     "name":"Sk",
//     "courseName": "Android Dev",
//     " price": "Free"
// }

// [   
//     {},
//     {},
//     {}
// ]




