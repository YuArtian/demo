// for (var i=0; i<5; i++) {
//   setTimeout(() => console.log(i), 1000*i)
// }

// for (let i=0; i<5; i++) {
//   setTimeout(() => console.log(i), 1000*i)
// }

// for (var i=0; i<5; i++) {
//   (function(i){
//     setTimeout(() => console.log(i), 1000*i)
//   })(i)
// }

// var out = (i) => {
//   setTimeout (() => console.log(i), 1000*i)
// }
// for (var i=0; i<5; i++) {
//   out(i)
// }

// let arr = []
// const out = i => new Promise(resolve => {
//   setTimeout(() => {
//     console.log(i)
//     resolve()
//   }, 1000*i)
// })
// for (var i=0; i<5; i++) {
//   arr.push(out(i))
// }
// Promise.all(arr)


// const sleep = () => new Promise(resolve => setTimeout(resolve, 1000))

// (async function(){
//   console.log('asdasd')
//   for (var i=0; i<5; i++) {
//     console.log('asdasd')
//     await sleep()
//     console.log(i)
//   }
// })()

// var sleep = () => new Promise (res => setTimeout(res, 1000));
// (async () => {
//   for (let i=0; i<5; i++) {
//     await sleep()
//     console.log(i)
//   }
// })()

/* 每隔一秒读取数组中的值 */

// let arr = [1,2,3,'a','b']
// for(let i=0; i<arr.length;i++){
//   setTimeout(() => console.log(arr[i]), 1000*i)
// }