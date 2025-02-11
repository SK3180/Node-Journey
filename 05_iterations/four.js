const myObject = {
    js:'JavaScript',
    cpp: 'C++',
    rb:'ruby',
    swift:"swift by apple"
}


for (const element in myObject) {
    console.log(`${element} shortcut of ${myObject[element]}`)
}

const programming  = ["js","kotlin","rb","py","java"]

for(const key in programming){
    console.log(key,programming[key])
}

// const map = new Map() // not itratable 
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('FR',"France")

// for(const key in map){
//     console.log(key)
// }


