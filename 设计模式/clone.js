let obj = {
  a: 'a',
  b: [1,2,3],
  c: /^\d+$/,
  d: {
    x: 1
  },
  e: function (){
    console.log('e')
  },
  f: () => {
    console.log('f')
  }
}

/* function clone (obj) {
  let result = {}
  for(key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key]
    }
  }
  return result
} */

function deepClone (obj) {
  // typeof obj == ''
  if (obj === null) return null
  if (typeof obj !== 'object' && typeof obj !== 'function') return obj
  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof Function) return new Function(obj)

  let newObj = new obj.constructor;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key])
    }
  }
  return newObj
}

let obj2 = deepClone(obj)

console.log('obj1',obj)
console.log('obj2',obj2)
console.log('=====')
obj.d.x = 3
console.log('obj2',obj2)