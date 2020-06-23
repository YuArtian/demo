let obj = {
  length: 2,
  a: {
    length: 3,
    output: function(){
      console.log('this.length',this.length);
      (function(){
        console.log('iife',this)
        console.log('this.length',this.length);
      })()
    },
    b: {
      length: 4,
      output: function(){
        console.log('this.length',this.length);
        (function(){
          console.log('iife',this)
          console.log('this.length',this.length);
        })()
      },
    }
  },
  output: function(){
    console.log('this.length',this.length);
    (function(){
      console.log('iife',this)
      console.log('this.length',this.length);
    })()
  }
}

const o = function(f){
  f()
  arguments[0]()
}



obj.output()
obj.a.output()
obj.a.b.output()
o(obj.output)