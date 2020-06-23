function gen(){
  let arr = []
  for (let i = 0; i < 10; i++) {
    arr[i] = i+1
  }
  console.log('arr',arr)
  // arr = shuffle(arr)
  arr = shuffle_simple(arr)
  console.log('shuffle arr',arr)
}
gen()
//O(n) 速度更快 更正确
function shuffle(arr){
  for (let i = 0; i < arr.length-1; i++) {
    const j = i + Math.floor(Math.random() * (arr.length-i));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr
}

//简单 但是概率错误 运行慢
function shuffle_simple(arr){
  return arr.sort(() => Math.random() - .5)
}

let test = [1,2,3,4]
let c = 0
let num = 10000
for (let index = 0; index < num; index++) {
  const a = shuffle(test)
  // const a = shuffle_simple(test)
  if (a[1] === 2) {
    c++
  }
}
//num越大 应该越接近于 0.25
console.log('概率', c/num)

