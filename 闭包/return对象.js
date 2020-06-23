function A () {
  let a = 'a'
  // return {
  //   a
  // }
  return function B (){
    console.log('B -> a',a)
    return {
      a
    }
  }
}

let test = A()
// test()

