const userEmail = "ashish@.ai"
if(userEmail){
    console.log("Got user email")
}
else{
    console.log("Don't have user email")
}

// Falsy values

// false
// 0
// -0
// BigInt 0n
// ""
// null
// undefined
// Nan

// Truthy values

// "0"
// "false"
// " "
// []
// {}
// function(){}

// To check if array is empty
const arr = []
if(arr.length === 0){
    console.log("Array is empty")
}

// To check if object is empty
const obj = {}
if(Object.keys(obj).length === 0){
    console.log("Object is empty")
}

// Nullish Coalescing Operator (??): null undefined

let val1
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1)

// Ternary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less than 80")