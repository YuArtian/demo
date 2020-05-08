/* function _new (constructor, ...args) {
  let target = {}
  Object.setPrototypeOf(target, constructor.prototype)
  const result = constructor.apply(target, args)
  return result instanceof Object ? result : target
}

function foo (age) {
  this.name = 'foo'
  this.age = age
}

let foo1 = _new(foo, 13)
console.log('foo1', foo1)

let foo2 = new foo(13)
console.log('foo2',foo2) */


// var a = {
  // [Symbol.toPrimitive]: (function(){
  //   let i = 0
  //   return function () {
  //     console.log('Symbol')
  //     return ++i
  //   }
  // })(),
  // valueOf: (function () {
  //   let i = 0
  //   return function () {
  //     console.log('valueOf')
  //     return ++i
  //   }
  // })(),
  // toString: (function (){
  //   let i = 0
  //   return function(){
  //     console.log('toString')
  //     return ++i
  //   }
  // })()
// }

// Object.defineProperty(window, 'a', {
//   get: (function(){
//     let i = 0
//     return function () {
//       return ++i
//     }
//   })()
// })

var a = new Proxy({i: 0}, {
  get: function(target, key){
    console.log('key',key)
    return () => ++target.i
  }
})

if (a == 1 && a == 2 && a == 3) {
  console.log('验证通过')
}


