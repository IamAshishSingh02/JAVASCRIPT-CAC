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

// Rest operator[...] -> Similar to spread operator
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Ashish",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}.`)
    
}
// handleObject(user)
handleObject({
    username: "Ashish",
    price: 199
})

const myNewArr = [200, 400, 500, 600]
function returnSecondValue(getArr){
    return getArr[1]
}
// console.log(returnSecondValue(myNewArr))
console.log(returnSecondValue([200, 400, 500, 600]))