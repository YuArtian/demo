/*
* 2.0 中 1. 默认会递归 2. 数组改变length 是无效的 3. 对象不存在的属性不能被拦截
* Vue 3.0
*/

//判断是否是对象
function isObject (val) {
  return typeof val === 'object' && val !== null
}
//判断属性是否存在
function hadKey (target, key) {
  return target.hasOwnProperty(key)
}

//case 2
let toProxy = new WeakMap()// 原对象 => 代理过的对象
//case 3
let toRaw = new WeakMap()// 代理过的对象 => 原对象

function reactive (target) {
  return createReactiveObject(target)
}

function createReactiveObject(target){
  if (!isObject(target)) {
    return target
  }
  //case 2 判断是否有对原对象代理的记录 防止多次代理同一个对象
  let proxy = toProxy.get(target)
  if (proxy) {
    return proxy
  }
  //case 3 判断是否是一个代理 防止一个代理再次被代理
  if (toRaw.has(target)) {
    return target
  }

  let observed = new Proxy(target, {
    get(target, key, receiver){
      console.log('获取')
      let result = Reflect.get(target, key, receiver)
      //在 get 的时候添加依赖 将当前的 key 和 effect 对应起来
      track(target, key)
      //case 1: 只在必要的时候（取值的时候）才递归数据
      return isObject(result) ? reactive(result) : result
    },
    set(target, key, value, receiver){
      console.log('修改')
      //case 4 判断是新增属性 还是修改原来的属性，注意要在 set 之前取老值
      let oldValue = Reflect.get(target, key, receiver)
      let res = Reflect.set(target, key, value, receiver)
      //属性不存在 新增属性
      if (!hadKey(target, key)) {
        console.log('新增')
        trigger(target, 'add', key)
      //属性存在 并且 新值和旧值不一样 才修改属性
      } else if (oldValue !== value) {
        console.log('修改')
        trigger(target, 'set', key)
      }//屏蔽了无异议的修改
      return res
    },
    deleteProperty(target, key){
      console.log('删除')
      return Reflect.deleteProperty(target, key)
    },
  })
  //case 2 记录代理过的对象
  toProxy.set(target, observed)
  //case 3 记录已存在的代理
  toRaw.set(observed, target)

  return observed
}

let object = { name: 'yyyyy', age: {n: 100}, arr: [1,2,3] }
/* 实现依赖收集 发布订阅模式 */
let activeEffectStark = []
let targetMap = new WeakMap()

let proxy = reactive(object)

proxy.name = 'zzzzz'
/* case 1 只劫持了第一层属性 没有劫持嵌套属性 */
proxy.age.n = 200

/*
* case 2 多次拦截同一个对象
* 利用 WeakMap 记录
*/
proxy = reactive(object)
proxy = reactive(object)
proxy = reactive(object)
/*
* case 3 防止代理套娃（代理一个代理）
* 利用 WeakMap 记录
*/
proxy = reactive(proxy)
proxy = reactive(proxy)
proxy = reactive(proxy)

/*
* case 4 代理数组 数组改变时 会同时改变 length 属性 会更新2次视图
* 如何区分 新增属性 还是 更改属性
*/
proxy.arr.push(4)


/**
 * 添加依赖
 * 动态创建依赖关系 数据变化的时候要触发 effect 执行
 * targetMap 使用 WeakMap 保存 目标对象target => depsMap 关系
 * depsMap 保存 属性值key => effect（new Set）
 * effect 中保存 这个 key中所有 effect
 */

//动态创建依赖关系
function track (target, key) {
  let effect = activeEffectStark[activeEffectStark.length -1]
  //有 effect 才添加依赖
  if (effect) {
    let depsMap = targetMap.get(target)
    //如果没有 target 记录，就新建一个 depsMap
    if (!depsMap) {
      targetMap.set(target, depsMap = new Map)
    }
    //如果当前 key，就新建 deps
    let deps = depsMap.get(key)
    if (!deps) {
      depsMap.set(key, deps = new Set)
    }
    if (!deps.has(effect)) {
      deps.add(effect)
    }
  }
}
//触发 effect
function trigger (target, method, key) {
  let depsMap = targetMap.get(target)
  if (depsMap) {
    let deps = depsMap.get(key)
    if (deps) {
      deps.forEach(effect => effect())
    }
  }
}

//响应式 将函数编程响应式的
// effect 要先执行一次，之后有数据变化 再次执行
function effect (fn) {
  let effect = createReactiveEffect(fn)
  effect()
}
//创建响应式函数
function createReactiveEffect (fn) {
  let effect = function(){
    run(effect, fn)
  }
  return effect
}

function run (effect, fn) {
  try {
    activeEffectStark.push(effect)//先将当前 effect 记录
    fn()//利用js单线程的特性，执行 fn 会触发 get 方法，从而触发 track 进行依赖收集
  } finally {
    activeEffectStark.pop()//收集到依赖之后 effect 就没有保存的必要了
  }
}

effect(() => {
  console.log('effect proxy name', proxy.name)
})
proxy.name = 'aaaaa'
// console.log('proxy', proxy)