let myDate = new Date()
console.log(typeof myDate)

console.log(myDate)
console.log(myDate.toISOString())

console.log(myDate.toString())

console.log(myDate.toTimeString())
console.log(myDate.toDateString())


console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())

// let myCreatedDate = new Date(2025, 0, 24) // Months start from 0 in JS [i.e 0 -> Jan]
// let myCreatedDate = new Date(2025, 0, 24, 15, 3, 7) // First date and then time
let myCreatedDate = new Date("2025-06-10") // In this format months start from 1
console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000)) // Convert milliseconds into seconds 

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDate())
console.log(newDate.getMonth()) // Jan -> 0
console.log(newDate.getDay()) // Mon -> 1

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}))