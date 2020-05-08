
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function Promise (executor) {
  if(typeof executor !== 'function') return
  let self = this
  self.status = PENDING
  self.onFullfilledList = []
  self.onRejectedList = []
  function reslove (value) {
    if (self.status === PENDING) {
      self.status = FULFILLED
      self.value = value
      self.onFullfilledList.forEach(fn => fn())
    }
  }
  function reject (reason) {
    if (status === PENDING) {
      self.status = REJECTED
      self.reason = reason
      self.onRejectedList.forEach(fn => fn())
    }
  }
  try {
    executor(reslove, reject)
  } catch (error) {
    reject(error)
  }
}

Promise.prototype.then = function(onFulfilled, onRejected){
  let onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
  let onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason}
  let self = this
  let _promise = new Promise((reslove, reject) => {
    if (self.status === FULFILLED) {
      setTimeout(() => {
        try {
          let result = onFulfilled(self.value)
          reslovePromise(_promise, result, reslove, reject)
        } catch (error) {
          reject(error)
        }
      })
    } else if (self.status === REJECTED) {
      setTimeout(() => {
        try {
          let result = onRejected(self.reason)
          reslovePromise(_promise, result, reslove, reject)
        } catch (error) {
          reject(error)
        }
      })
    } else if (self.status === PENDING) {
      self.onFullfilledList.push(() => {
        setTimeout(()=>{
          try {
            let result = onFulfilled(self.value)
            reslovePromise(_promise, result, reslove, reject)
          } catch (error) {
            reject(error)
          }
        })
      })
      self.onRejectedList.push(() => {
        setTimeout(()=>{
          try {
            let result = onRejected(self.value)
            reslovePromise(_promise, result, reslove, reject)
          } catch (error) {
            reject(error)
          }
        })
      })
    }
  })
  return _promise
}

function reslovePromise (_promise, result, reslove, reject) {
  if (_promise === result) {
    throw new Error('循环')
  }
  if ((result && typeof result === 'object') || typeof result === 'function') {
    let used = false
    try {
      let then = result.then
      if (typeof then === 'function') {
        then.call(result, value => {
          used = true
          if(used) return
          reslovePromise(_promise, value, reslove, reject)
        }, reason => {
          used = true
          if(used) return
          reslovePromise(_promise, reason, reslove, reject)
        })
      } else {
        used = true
        if(used) return
        reslove(result)
      }
    } catch (error) {
      used = true
      if(used) return
      reject(error)
    }
  } else {
    reslove(result)
  }
}
