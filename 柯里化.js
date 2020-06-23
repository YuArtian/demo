/* 柯里化 */
const curring  = (fn, arr = []) => {
  let length = fn.length
  return (...args) => {
    let a = [...arr, ...args]
    return (a.length === length) ? fn(...a) : curring(fn, a)
  }
}


const curry = (fn, arr = []) => (...args) => (
  arg => arg.length === fn.length
    ? fn(...arg)
    : curry(fn, arg)
)([...arr, ...args])


const log = (a,b,c) => {
  console.log('a,b,c',a,b,c)
}

// let part = curry(log)('a')('b')
// let part = curry(log)
let part = curring(log)
// console.log('part',part.toString())
part('a')('b')('b')
part('b')
part('c')