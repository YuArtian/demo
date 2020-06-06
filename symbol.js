

function Symbol(description){
  if(this instanceof Symbol) throw new TypeError('Symbol is not a constructor')
  let symbol = Object.create(null)
  Object.defineProperty(symbol, '__Description__', {
    value: description,
    configurable: false,
    writable: false,
    enumerable: false
  })
  return symbol
}

let a = Symbol('a')
console.log('a',a)