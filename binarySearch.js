/*
search an array for a tgt, return the idx if found otherwise return -1
input must be sorted
*/

function binarySearch (arr, tgt) {
  if(!arr.length) return -1

  const p = Math.floor(arr.length/2)

  if(arr[p] === tgt) return p

  if(tgt < arr[p]) return binarySearch(arr.slice(0, p), tgt)
  else result = binarySearch(arr.slice(p+1), tgt)

  return result === -1? -1: p+1+result

}

const test = [1,2,3,4,6]
console.log(binarySearch(test, 5))
console.log(binarySearch(test, 6))
