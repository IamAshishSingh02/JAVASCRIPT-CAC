// for in loop 

const myObj = {
    js: 'javascriprt',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for(const key in myObj){
    console.log(`${key} shortcut is for ${myObj[key]}`)
}

const languages = ["js", "rb", "py", "java", "cpp"]
for (const key in languages) {
    console.log(languages[key])
}

// Not working on maps
const map = new Map()
map.set('IN', "India")
map.set('RUS', "Russia")
map.set('USA', "United States of America")
// for (const key in map) {
//     console.log(key)
// }