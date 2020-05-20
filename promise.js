const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

// new Promise时 接受一个执行器
// 执行器有 2 个参数, reslove
function Promise(executor){
  this.status = PENDING
  this.onFulfilledList = []
  this.onRejectedList = []
  const reslove = (value) => {
    if (this.status === PENDING) {
      this.status = FULFILLED
      this.value = value
      this.onFulfilledList.forEach(fn => fn())
    }
  }
  const reject = (reason) => {
    if (this.status === PENDING) {
      this.status = REJECTED
      this.reason = reason
      this.onRejectedList.forEach(fn => fn())
    }
  }
  try {
    executor(reslove, reject)
  } catch (error) {
    reject(error)
  }
}
//Promise 需要实现 then 函数
//.then 返回一个 promise
Promise.prototype.then = function(onFulfilled, onRejected){
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
  onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason}
  const _promise = new Promise((reslove, reject) => {
    if (this.status === FULFILLED) {
      setTimeout(() => {
        try {
          let result = onFulfilled(self.value)
          reslovePromiseResult(_promise, result, reslove, reject)
        } catch (error) {
          reject(error)
        }
      })
    } else if (this.status === REJECTED) {
      setTimeout(() => {
        try {
          let result = onRejected(self.value)
          reslovePromiseResult(_promise, result, reslove, reject)
        } catch (error) {
          reject(error)
        }
      })
    } else if (this.status === PENDING) {
      this.onFulfilledList
    }
  })
  return _promise
}

function reslovePromiseResult(_promise, result, reslove, reject){

}





let p = new Promise(function(){

})
