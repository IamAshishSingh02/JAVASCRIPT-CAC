console.log("2" > 1)
console.log("02" > 1)

/* 
Avoid all these types of comparisions 
which includes null and undefined
*/

console.log(null > 0)
console.log(null <= 0)
console.log(null >= 0)
console.log(null < 0)

console.log(undefined >= 0)
console.log(undefined <= 0)
console.log(undefined < 0)
console.log(undefined > 0)

// Equality works differntly than comparisions
console.log(null == 0) 
console.log(undefined == 0)

// ===[strictly equal, checks data type also]
console.log("2" == 2);
console.log("2" === 2);