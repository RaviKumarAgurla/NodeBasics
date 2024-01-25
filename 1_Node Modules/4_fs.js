const fs = require('fs')

// // create and write to file f2

// fs.writeFileSync('f1.txt', 'This is new file')


// // read from file f2

// let data  = fs.readFileSync('f1.txt')

// console.log('data'+ data)


// // appending to file f2.txt

// fs.appendFileSync('f1.txt', 'appending something')


// // delete file f1.txt

// fs.unlinkSync('f2.txt')


// create a directory

fs.mkdirSync('myDirectory')

// check content inside dir

let dirContent = fs.readdirSync('./myDirectory')

console.log(dirContent)

// check existence of files or dir

let doesExist = fs.existsSync('./myDirectory')

console.log(doesExist)


// remove dir

fs.rmdirSync('./myDirectory')   // directory should be empty





