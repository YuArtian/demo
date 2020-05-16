function forEachValue(obj, callback){
  Object.keys(obj).forEach(key => {
    callback(key, obj[key])
  })
}

let oldTree = {
  state: {
    w: 'w'
  },
  modules: {
    a: {
      state: {
        x: 'x'
      },
      modules: {
        c: {
          state: {
            z: 'z'
          }
        }
      }
    },
    b: {
      state: {
        y: 'y'
      }
    },
  }
}
// let newTree = {
//   w: 'w',
//   a: {
//     x: 'x',
//     c: 'c',
//   },
//   b: {
//     y: 'y'
//   },
// }
console.log('oldTree',oldTree)
let root = {}
function register(path, rootModule){
  let newModule = {
    _raw: rootModule,
    _children: {},
    state: rootModule.state
  }
  if (path.length === 0) {
    root = newModule
  } else {// [ ,c]
    let parent = path.slice(0, -1).reduce((root, current) => {
      return root._children[current]
    }, root)
    parent._children[path[path.length - 1]] = newModule
  }
  if (rootModule.modules) {
    forEachValue(rootModule.modules, (modulesName, module) => {
      register(path.concat(modulesName), module)
    })
  }
}
register([], oldTree)
console.log('newTree',root)





