// Immediately Invoked Function Expressions (IIFE)

/*
Global scope ke pollution se problem hoti hai kai bar
toh uss global scope ke variables ya jo bhi declaration
hai uski pollution ko hatane ke liye iife ka use hota hai
*/

// Named IIFE
(function chai(){
    console.log(`DB connected`)
})(); // Yaha pe semi-colon lagana jaruri hai to end it nahi to agla wala nahi chalega

// Un-named IIFE
( (username) => {
    console.log(`DB connected two ${username}`)
})("Ashish");