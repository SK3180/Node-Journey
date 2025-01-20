const Username = "Sk"
const repoCount = 60

// console.log(Username + repoCount + "Value")

// BackTicks --> ` (this is before 1 num key on keyboard)

console.log(`Hello my name is ${Username} and my repo count is ${repoCount}`)

console.log("Name - ",Username, "RepoCount - ", repoCount)


const gameName = new String('Just Sk Playz')

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toLocaleLowerCase())
console.log(gameName.charAt(9))
console.log(gameName.indexOf('z'))

const newString =  gameName.substring(0,7)

console.log(newString);
console.log(newString.length)
const anotherString = gameName.slice(-8,8)
console.log(anotherString)

const newName = "     Sk Singh     "
console.log(newName)
console.log(newName.trim()) // remove white spaces

const url = "https://sachin.com/javaScript"

console.log(url.replace('sachin','singh'))

console.log(url.includes('sachin'))

console.log(url.split('/'))













