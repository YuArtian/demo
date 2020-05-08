/* var a = 0
var b = 0
function A (a) {
  A = function (b){
    // console.log('inner a', a + b++)
    alert('inner A' + (a + b++))
  }
  // console.log('outer A',a++)
  alert('outer A'+ a++)
}

A(1)
A(2) */

/* function Foo(){
  getName = function(){
    console.log('1')
  }
  return this
}

Foo.getName = function () {
  console.log('2')
}
Foo.prototype.getName = function () {
  console.log('3')
}

var getName = function () {
  console.log('4')
}
function getName () {
  console.log('5')
}

Foo.getName()//2
getName()//4
Foo().getName()//1
getName()//1
new Foo.getName()//2
new Foo().getName()//3
new new Foo().getName()//3 */

/* async function async1 () {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
async function async2 () {
  console.log('async2')
}
console.log('script start')
setTimeout(function(){
  console.log('setTimeout')
},0)
async1()
new Promise(function(reslove){
  console.log('promise1')
  reslove()
}).then(function(){
  console.log('promise2')
})
console.log('script end')

//script start
//async1 start
//async2
//promise1
//script end
//async1 end
//promise2
//setTimeout */

/*
function A (){
  alert(1)
}
function Fn(){
  A=function(){
    alert(2)
  }
  return this
}
Fn.A = A
Fn.prototype = {
  A: () => {
    alert(3)
  }
}

A()//1
Fn.A()//1
Fn().A()//2
new Fn.A()//1
new Fn().A()//3
new new Fn().A()//Error A is not a constructor */

/*
var x = 2
var y = {
  x: 3,
  z: (function(x){
    this.x*=x
    x+=2
    return function (n) {
      this.x*=n
      x+=3
      console.log('x',x)
    }
  })(x)
}
var m = y.z
m(4)
y.z(5)
console.log('x, y.x',x, y.x)
//x 7
//x 10
//x, y.x 16 15
 */

//  var a = {
//    i: 0,
//    toString: function(){
//     return ++this.i
//    }
//  }

// var a = [1,2,3]
// a.toString = a.shift
// var a = new Proxy({i: 0}, {
//   get: function(target){
//     return () => target.i += 1
//   }
// })

var a = {
  valueOf: (function(){
    let i = 0
    return function(){
      return ++i
    }
  })()
}

if (a == 1 && a == 2 && a == 3) {
  console.log('验证通过')
}


/*
var x = 0
var y = 1
function fn () {
  x+=2
  fn = function (y) {
    console.log('y',y+(--x))
  }
  console.log('inner x,y',x,y)
}
fn(3)
fn(4)
console.log('outer x,y',x,y)

//inner 2 1
//y 5
//outer 1,1 */
/*
setTimeout(() => {
  console.log(1)
},20)
console.log(2)
setTimeout(() => {
  console.log(3)
},10)
console.log(4)
console.time('AA')
for(let i=0; i<90000000; i++){
  //do something
}
console.timeEnd('AA')
console.log(5)
setTimeout(() => {
  console.log(6)
},8)
console.log(7)
setTimeout(() => {
  console.log(8)
},15)
console.log(9)
//2
//4
//'aa'
//5
//7
//9
//3
//1
//6
//8
 */






















