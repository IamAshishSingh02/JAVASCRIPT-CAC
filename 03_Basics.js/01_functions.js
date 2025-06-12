function sayMyName(){
    console.log("Ashish")
}
// sayMyName()

function addTwoNumbers(num1, num2){
    console.log(num1 + num2)
}
// addTwoNumbers(3, 2)
// addTwoNumbers(3, "2")
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null)
// addTwoNumbers(3, undefined)

function addTwoNumbers(num1, num2){
    return num1 + num2
}
const result = addTwoNumbers(3, 5)
// console.log(`Result: ${result}`);

function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a username.")
        return
    }
    return `${username} just logged in.`
}
// console.log(loginUserMessage("Ashish"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage())