/*
Given an array and a number, d, perform d left rotations on the array.

[ 1 2 3 4 5 6 ]
[1 2 3] [4 5 6]

3 2 1 4 5 6 7
3 2 1 7 6 5 4
4 5 6 7 1 2 3

*/

function swap (arr, a, b) {
  let tmp = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}

function rotate (arr, d) {
  let i = 0, j = d-1, k = arr.length-1
  //reverse subarrays
  while(i<j) {
    swap(arr, i, j)
    i++, j--
  }
  while(d<k) {
    swap(arr, d, k)
    d++, k--
  }

  return arr.reverse()
}

const test = [ 1, 2, 3, 4, 5, 6 ]
console.log(rotate(test, 3))

// O(1)
