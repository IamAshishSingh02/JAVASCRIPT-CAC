// forEach loop

const coding = ["js", "cpp", "ruby", "java", "python"]

coding.forEach(function (item){
    // console.log(item)
})

coding.forEach((item) => {
    // console.log(item)
})

function printMe(item){
    // console.log(item)
}
coding.forEach(printMe)

coding.forEach((item, index, array) => {
    // console.log(item, index, array)
})

const myCoding =[
    {
        langName: 'javascript',
        langFileName: 'js'
    },
    {
        langName: 'java',
        langFileName: 'java'
    },
    {
        langName: 'python',
        langFileName: 'py'
    }
]

myCoding.forEach((item) => {
    // console.log(item.langName)
})