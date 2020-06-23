//插入排序 正序
let arr = [3, 2, 1, 9, 5, 7, 12, 110, 1, 1];

function insertion_sort(arr) {
  let length = arr.length
  if(length < 2) return arr
  for (let i = 1; i < length; i++) {
    const key = arr[i]
    let last = i - 1
    while(last >= 0 && arr[last] > key){
      arr[last + 1] = arr[last]
      last--
    }
    arr[last + 1] = key
  }
  return arr
}

insertion_sort(arr);

console.log("arr", arr);





