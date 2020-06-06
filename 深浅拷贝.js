
let obj = {
  a: { w: [1,2,3, { x: 'x' }] },
  b: 'b',
  d: null,
  e: undefined,
  f: new Date(),
  g: /^[0-9]$/g,
  h: function(){
    console.log('hhhhh')
  },
  i: () => {console.log('iiiiii')},
  j: function j (){
    console.log('jjjjjjjjjjj')
  }
}

function deepClone (target) {
  if(target === null) return target
  if(typeof target !== 'object') return target
  if(target instanceof RegExp) return new RegExp(target)
  if(target instanceof Date) return new Date(target)

  let result = new target.constructor()
  for(let key in target) {
    result[key] = deepClone(target[key])
  }
  return result
}

let newObj = deepClone(obj)
obj.a.w[3].x = 'new x'
obj.i = () => {console.log('new iiiiii')}
obj.i()
console.log('newObj',newObj)
console.log('newObj',newObj.i())