const name = "Ashish"
const rep = 12

//console.log(name + rep + "val") // Not a good syntax[outdated]

// String interpolation[good technique]
console.log(`My name is ${name.toUpperCase()} and my rep count is ${rep}.`)

// Another way of defining string
const myName = new String('As-hi-sh')

console.log(myName)
console.log(myName[0])

console.log(myName.__proto__)
console.log(myName.length)

console.log(myName.toUpperCase())
console.log(myName.charAt(4))
console.log(myName.indexOf('s'))

console.log(myName.substring(0, 3))

// In slice we can give negative indexing
console.log(myName.slice(-5))
console.log(myName.slice(-5, 3))

// Trim removes white spaces and newline character
const newStr = "    Ashish \n "
console.log(newStr)
console.log(newStr.trim())

const url = "https://ashish.com/ash%20singh"
console.log(url.replace('%20', '-'))
console.log(url.includes('://'))

// splits string in array on basis of seperator 
console.log(myName.split('-'));