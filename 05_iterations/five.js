const coding = ["js","ruby","java","kotlin","cpp"]

coding.push("jethalal")

// coding.forEach(function (item) {
//     console.log(item)
// })

//console.log(coding)

// coding.forEach( (item) => {
//     console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

coding.forEach((item,index,arr)=>{  // whole data it have
    console.log(item,index,arr)
})

const myCoding = [
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
]

myCoding.forEach((item)=>{    //callback
    console.log(item.languageName)
})
