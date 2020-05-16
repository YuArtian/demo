/* const str = require('./a.js')
const fs = require('fs')


function req (moduleName) {
  const content = fs.readFileSync(moduleName, 'utf8')
  let fn = new Function(
    'exports', 'module', 'require', '__dirname', '__filename',
    content + '\n return module.exports'
  )
  let module = {
    exports: {}
  }
  console.log('fn',fn)
  console.log('content',content)
  return fn(module.exports, module, req, __dirname, __filename)
}

const str2 = req('./a.js')

console.log('str-->',str)
console.log('str2-->',str2) */


import a from './a'
console.log('a',a.a)