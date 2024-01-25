const path = require('path')


let ext = path.extname('./f1.txt')

let baseName = path.basename('./f1.txt')

console.log(baseName)
console.log(ext)

console.log(__filename)
console.log(__dirname)