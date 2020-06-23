

let events = {
  arr: [],
  on: function(fn){
    this.arr.push(fn)
  },
  emit: function(){
    this.arr.forEach(fn => fn())
  },
}

