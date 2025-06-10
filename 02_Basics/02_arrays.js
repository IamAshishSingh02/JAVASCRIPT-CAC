const heros1 = ["thor", "hulk", "spiderman"]
const heros2 = ["batman", "superman", "flash"]

heros1.push(heros2)
console.log(heros1)
console.log(heros1[3][1])

const allHeros = heros1.concat(heros2)
console.log(allHeros)

// Spreading
const allNewHeros = [...heros1, ...heros2]
console.log(allNewHeros)

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArr = anotherArr.flat(Infinity)
console.log(realAnotherArr)

console.log(Array.isArray("Ashish"))
console.log(Array.from("Ashish"))
console.log(Array.from({name: "Ashish"})) //Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))