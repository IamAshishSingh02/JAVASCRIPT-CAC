function one(){
    const username = "Ashish"
    function two(){
        const website = "youtube"
        // console.log(username)
    }
    // console.log(website)
    two()
}
one()

if(true){
    const username = "Ashish"
    if(username == "Ashish"){
        const website = " youtube"
        // console.log(username + website) 
    }
    // console.log(website)
}
// console.log(username)

// ############## Interesting ################

console.log(addOne(5))
function addOne(num){
    return num + 1
}

console.log(addTwo(5)) // Error -> Access before intialization
const addTwo = function(num){
    return num + 2
}