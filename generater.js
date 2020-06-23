function * gen(){
  yield 'hello1';
  yield 'hello2';
  return 'hello3'
}

let test = gen()
console.log('test.next()',test.next())
console.log('test.next()',test.next())
console.log('test.next()',test.next())
console.log('test.next()',test.next())
console.log('test.next()',test.next())
console.log('test.next()',test.next())

