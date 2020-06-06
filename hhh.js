//直接的方法
// var arr = [56, 65, 74, 100, 99, 68, 86, 180, 90];
// var arr = [103,123,4444,99,2000];
// let input = '71899703 200 6 91 425 4 67407 7 96488 6 4 2 7 31064 9 7920 1 34608557 27 72 18 81'
let input = '        1        123    \t\t\t\t\t\t 3\r\n21      18 81      171         '
var arrObj = input.trim().split(/[^0-9]+/g).map(item => {
  var obj = {};
  obj.val = item;
  obj.weight = item
    .toString()
    .split("")
    .reduce((p, n) => p + n * 1, 0);
  return obj;
});
arrObj.sort((a, b) => {
  if (a.weight === b.weight) {
    if (a.val === b.val) {
      return 0
    }
    if (a.val > b.val) {
      return 1
    }
    return -1
  } else {
    return a.weight - b.weight
  }
});
console.log('arrObj',arrObj)
let str = arrObj.map(i => i.val).join(' ')
// console.log(arrObj);
console.log('str',str)
