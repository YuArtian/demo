let list =[
  {id:1,name:'部门A',parentId:0},
  {id:2,name:'部门B',parentId:0},
  {id:3,name:'部门C',parentId:1},
  {id:4,name:'部门D',parentId:1},
  {id:5,name:'部门E',parentId:2},
  {id:6,name:'部门F',parentId:3},
  {id:7,name:'部门G',parentId:2},
  {id:8,name:'部门H',parentId:4}
];


const convert = (items, id=0, link='parentId') => {
  return items.filter(v => v[link] === id)
  .map(v => ({ ...v, children: convert(items, v.id) }))
}

const result = convert(list);
console.log('result',result)

function foo () {}
console.log('foo',foo.prototype)
const bar = foo.bind({c: 'c'})
console.log('bar',bar)
console.log('bar',bar.prototype)

const a = new bar()
console.log('a',a)
console.log('a',a.__proto__)

function boo () {}
const b = new boo()
console.log('b',b)
console.log('b',b.__proto__)