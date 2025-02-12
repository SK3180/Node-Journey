const myNums = [1,2,3,4,5]

let initialval = 0

// const newNums = myNums.reduce((acc,currentval) => {
//     console.log(`acc: ${acc} and currval:${currentval}`)
//    return acc + currentval
// },initialval)

//console.log(newNums)
//In arrow function
const newNumsArrow = myNums.reduce((acc,currval) => acc + currval,initialval);

console.log(newNumsArrow)


const shoppingCart = [
    {
        name:"rtx 5090 gpu",
        price:235000
    },
    {
        name:"i9 14th gen",
        price:235000
    },
    {
        name:"msi z980 motherboard",
        price:55000
    },
    {
        name:"ddr6 ram",
        price:10000
    },
    {
        name:"nvme m.2",
        price:15000
    },
    {
        name:"Trex Case",
        price:20000
    }
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price,0 )

console.log(priceToPay)
