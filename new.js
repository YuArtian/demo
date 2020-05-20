function _new (constructor, ...args) {
  let target = {}
  Object.setPrototypeOf(target, constructor.prototype)
  let result = constructor.apply(target, args)
  result instanceof Object ? result : target
}


