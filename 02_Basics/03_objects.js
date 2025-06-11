// singleton
// Object.create()

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Ashish",
    "fullName": "Ashish Singh",
    "full Name": "Ashish Singh",
    [mySym]: "myKey1",
    age: 21,
    location: "Pune",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

console.log(jsUser.age)
console.log(jsUser["age"])

console.log(jsUser.fullName)
console.log(jsUser["fullName"])

// console.log(jsUser.full Name) // Error bcoz of space
console.log(jsUser["full Name"])

// console.log(typeof jsUser.mySym) // undefined
console.log(typeof jsUser[mySym])