// ########### Numbers #############

const score = 400
const bal = new Number(100)

console.log(score)
console.log(bal)

console.log(bal.toString().length)
console.log(bal.toFixed(2))

const num = 23.8966
console.log(num.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

// ############ Maths ##############

console.log(Math)

console.log(Math.abs(-4))

console.log(Math.round(5.45))
console.log(Math.ceil(5.45))  // decimal se phle wala + 1 integer dega
console.log(Math.floor(5.55)) // decimal se phle wala integer dega

console.log(Math.min(5, 3, 5, 2, 6, 8, 9))
console.log(Math.max(5, 3, 5, 2, 6, 8, 9))

console.log(Math.random()) // b/w 0 and 1
console.log(Math.floor((Math.random() * 10) + 1)) // b/w 1 and 10

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min)) // b/w 10 and 20