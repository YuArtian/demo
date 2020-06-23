let arr = [5, 6, 8, 10, 9, 1, 3];
// 1
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let left = [];
  let right = [];
  let baseDot = Math.floor(arr.length / 2);
  let base = arr.splice(baseDot, 1)[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < base) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(base, quickSort(right));
}

//2
const SENTINEL = Number.MAX_SAFE_INTEGER;
function divide(p, r) {
  return Math.floor((p + r) / 2);
}
function conquer(A, p, q, r) {
  const A1 = A.slice(p, q);
  const A2 = A.slice(q, r);

  A1.push(SENTINEL);
  A2.push(SENTINEL);

  for (let k = p, i = 0, j = 0; k < r; k++) {
    A[k] = A1[i] < A2[j] ? A1[i++] : A2[j++];
  }
}

function merge_sort(A, p = 0, r) {
  r = r || A.length;
  if (r - p === 1) return;
  if (r - p === 2) {
    if (A[p] > A[r - 1]) {
      [A[p], A[r - 1]] = [A[r - 1], A[p]];
    }
    return;
  }

  const q = divide(p, r);
  merge_sort(A, p, q);
  merge_sort(A, q, r);
  conquer(A, p, q, r);
  return A;
}

//3
function qSort3(arr) {
  //三路快排
  if (arr.length == 0) {
    return [];
  }
  var left = [];
  var center = [];
  var right = [];
  var pivot = arr[0]; //偷懒，直接取第一个,实际取值情况 参考[快速排序算法的优化思路总结]
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] == pivot) {
      center.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...qSort3(left), ...center, ...qSort3(right)];
}
// console.log(
  // qSort3([9, 4, 10, 3, 1, 1, 0, 10, 8, 3, 9, 9, 4, 10, 10, 9, 9, 9, 1, 0])
// );
//原地
function quickSort(arr) {
  // 交换
  function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  // 分区
  function partition(arr, left, right) {
    /**
     * 开始时不知最终pivot的存放位置，可以先将pivot交换到后面去
     * 这里直接定义最右边的元素为基准
     */
    var pivot = arr[right];
    /**
     * 存放小于pivot的元素时，是紧挨着上一元素的，否则空隙里存放的可能是大于pivot的元素，
     * 故声明一个storeIndex变量，并初始化为left来依次紧挨着存放小于pivot的元素。
     */
    var storeIndex = left;
    for (var i = left; i < right; i++) {
      if (arr[i] < pivot) {
        /**
         * 遍历数组，找到小于的pivot的元素，（大于pivot的元素会跳过）
         * 将循环i次时得到的元素，通过swap交换放到storeIndex处，
         * 并对storeIndex递增1，表示下一个可能要交换的位置
         */
        swap(arr, storeIndex, i);
        storeIndex++;
      }
    }
    // console.log('arr---',arr)
    // 最后： 将pivot交换到storeIndex处，基准元素放置到最终正确位置上
    console.log('pivot',pivot)
    swap(arr, right, storeIndex);
    console.log('pivot==',pivot)
    return storeIndex;
  }

  function sort(arr, left, right) {
    if (left > right) return;

    var storeIndex = partition(arr, left, right);
    sort(arr, left, storeIndex - 1);
    sort(arr, storeIndex + 1, right);
  }

  sort(arr, 0, arr.length - 1);
  return arr;
}

// console.log(quickSort([8, 4, 90, 8, 34, 67, 1, 26, 17]));
console.log(quickSort([1, 6, 3, 4, 5]));
// arr = quickSort(arr);
// arr = merge_sort(arr);
// console.log("arr", arr);
