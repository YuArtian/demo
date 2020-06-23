const fs = require('fs')

fs.readFile('./test_big_file.text', () => {
  console.log('fs readFile')
})
setTimeout(() => {
  console.log('setTimeout ---1')
}, 2)


// fs.readFile('./test.text', () => {
//   console.log('fs readFile')
// })

setTimeout(() => {
  console.log('setTimeout ---2')
}, 2000)

setImmediate(() => {
  console.log('setImmediate -----1')
})
setImmediate(() => {
  console.log('setImmediate -----2')
})