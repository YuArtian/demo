


function after(times, callback){
  return function(){
    if(--times === 0) {
      callback()
    }
  }
}

const cb = after(3, () => {
  console.log('cb结束')
})

cb()
cb()
cb()
