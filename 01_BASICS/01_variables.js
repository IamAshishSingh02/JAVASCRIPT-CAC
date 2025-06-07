/*
Prefer not ot use var
because of issue in block scope and functional scope
*/

const accId = 12434
let accEmail = "fgegfrf@gmail.com"
var accPass = "3143245"
accCity = "weegb" // This one is wrost.
let accState

//accId = 23
accEmail = "fvcvdf"
accPass = "4324"
accCity = "fe"

//console.log(accId);
console.table([accId, accEmail, accPass, accCity, accState])