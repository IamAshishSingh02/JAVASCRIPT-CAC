// ############# Conversions #############

let score = "33abc"

console.log(typeof score)
console.log(typeof(score))

let valInNumber = Number(score)
console.log(valInNumber)
console.log(typeof valInNumber)

// "33" -> 33
// "33abc" -> NaN[Not a Number]
// "true" -> 1; "false" -> 0

let isLoggedIn = 2
let boolIsLoggedIn = Boolean(isLoggedIn)
console.log(boolIsLoggedIn)

// 1 -> true; 0 -> false
// "" -> false
// "dgf" -> true

let num = 445
let strNum = String(num)
console.log(strNum)
console.log(typeof strNum)

// ############# Operations ##############

let val = 3
let negVal = -val
console.log(negVal)

let str1 = "Ashish"
let str2 = " Hello"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2)

