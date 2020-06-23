//forEach

let arr = ['a','b',,'c']
Array.prototype.newMethod = function(){

}
// let obj = {a: 'a'}
// for (const key in obj) {
//   console.log('key',key)
// }
let map = new Map([['name','a'], ['age', 1000]])
let obj = {
  [Symbol.iterator]: function(){
    let i = 0
    return {
      next: function(){
        if (i<5) {
          return {
            value: i++,
            done: false
          }
        } else {
          return {
            value: i,
            done: true
          }
        }
      }
    }
  }
}

for (const iterator of obj) {
  console.log('iterator',iterator)
}