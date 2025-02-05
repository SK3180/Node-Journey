// for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for(i=1;i<=10;i++){

if(i == 7){
    console.log("7 is my lucky number")
}
    console.log(i)
}


for (let i = 1; i <= 10; i++) {
    console.log(` Outer Loop${i}`)
    for(j = 1;j<=10;j++){
     //   console.log(` Inner Loop${j} and outerloop ${i}`)
     console.log(i + '*' + j + ' = ' + i*j)
    }
}

let myArray = ["IronMan","Batman","Hulk"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}


// Keywords

// Break and continue


// for (let index = 1; index <= 20; index++) {
//     if(index == 7){
//         console.log("7 is Detected")
//         break;
//     }
//    console.log(`value of i is ${index}`)
    
// }


for (let index = 1; index <= 20; index++) {
    if(index == 7){
        console.log("7 is Detected")
        continue;
    }
   console.log(`value of i is ${index}`)
}



