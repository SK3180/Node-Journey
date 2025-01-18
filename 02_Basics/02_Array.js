const marvel_heros = ["Iron Man","Thor","Spiderman"]
const dc_heros = ["Batman","Superman"]


//marvel_heros.push(dc_heros) // this will push a array inside the array


//console.log(marvel_heros[3][1]) // for navigating to the array 2 element inside the array 1


const all_Heros =  marvel_heros.concat(dc_heros) // concat makes a new array and and all elements

console.log(all_Heros)


//Spread operation (majorly used in industry instead of concat for spreading)

const all_new_Heros = [...marvel_heros,...dc_heros]

console.log(all_new_Heros)


// Interesting thing
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) 
//Flat Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// Infinity can identify the depth by itself
console.log(real_another_array)

console.log(Array.isArray("Sk")) // isArray check if its Array or Not
console.log(Array.from("Sk")) // from converts provided data to array
console.log(Array.from({name:"Sk"})) // this will give empty array *Interesting, we have to tell to make array from keys


let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score,score2,score3))   //Returns a new array from a set of elements.




