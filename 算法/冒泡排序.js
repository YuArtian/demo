let arr = [5, 6, 8, 10, 9, 1, 3];

function bubble(arr){
  let length = arr.length
  for (let i = 0; i < length-1; i++) {
    let done = true
    for (let j = 0; j < length-i; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        done = false
      }
    }
    if (done) {
      break;
    }
  }
  return arr
}

arr = bubble(arr)
console.log('arr',arr)