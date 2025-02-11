// for of

// {"","",""}

// [{},{},{}]

const arr = [1,2,3,4,5]

for(const num of arr){
console.log(num)
}


const greetings = "Namaste World!"
for(const greet of greetings){
    console.log(greet)
    if(greet == " "){
        break;
    }
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")

console.table(map)

for(const [key,value] of map){
    console.log(key,':-', value)
}

const myObject  = {
    'game1' : 'GTA 6',
    'game2' : 'Outlast',
    game3 : 'Rdr2'
}
for(const [key,value] of myObject){
    console.log(key, "-",value)
}