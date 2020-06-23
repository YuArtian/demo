function A(){}
const a = new A()

console.log('typeof a',typeof a)
console.log('aaa',a.__proto__ === A.prototype)