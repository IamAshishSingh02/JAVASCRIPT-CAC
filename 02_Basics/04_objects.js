// const user = new Object() // Singleton object

const user = {} // Non-singleton object
user.id = "123abc"
user.name = "Ashish"
user.isLoggedIn = false
// console.log(user)

const regularUser = {
    email: "cddc@amazon.com",
    fullName: {
        userFullName: {
            firstName: "Ashish",
            lastName: "Singh"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = {obj1, obj2} // Object ke andar objects aa jayege
// const obj3 = Object.assign(obj1, obj2) // In this way obj1 = obj3 as well
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2} // Spreading
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "fdfg@gmail.com"
    },
    {
        id: 2,
        email: "ghdf@gmail.com"
    }
]
// console.log(users[0].email)

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(user.hasOwnProperty("isLoggedIn"))

// Concept of restructuring
const course = {
    courseName: "js",
    price: "999",
    instructor: "Ashish"
}
const {instructor: i} = course
console.log(i)

// Json

// {
//     "name": "Ashish",
//     "courseName": "js",
//     "price": "free"
// }