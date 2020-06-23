function isType(type){
  return function(value){
    return Object.prototype.toString.call(value) === `[object ${type}]`
  }
}

const isArray = isType('Array')
console.log('[1,2,3] isArray?', isArray([1,2,3]))
console.log('yu isArray?', isArray('yu'))