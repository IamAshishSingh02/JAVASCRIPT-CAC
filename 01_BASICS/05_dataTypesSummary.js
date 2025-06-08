// Primitive[7 Types]- Call by Value

// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n

// Non-Primitive- Call by Refrence

// Array
// Objects
// Functions

const heros = ["Virat Kohli", "Hulk", "Batman"]

let myObj = {
    name: "Ashish",
    age: 21
}

const myFunc = function(){
    console.log("Ashish")
}

console.log(typeof myFunc) // Function Object