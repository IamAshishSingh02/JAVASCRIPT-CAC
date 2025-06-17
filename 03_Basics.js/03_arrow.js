const user = {
    username: "Ashish",
    price: 999,
    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`)
        // console.log(this)
    }
    
}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this)

// function chai(){
//     let username = "Ashish"
//     console.log(this.username)
// }
// chai()

// const chai = function(){
//     let username = "Ashish"
//     console.log(this.username)
// }
// chai()

// const chai = () => {
//     let username = "Ashish"
//     console.log(this.username)
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(5, 3))

// const addTwo = (num1, num2) => num1 + num2 // Implicit return
// console.log(addTwo(5, 3))

// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(5, 3))

const addTwo = (num1, num2) => ({username: "Ashish"})
console.log(addTwo(5, 3))