/*
given unsorted array, return true if the sum of any two numbers equals a target
*/

function pairSumNaive (arr, tgt) {
  const len = arr.length
  let sum = 0
  for(let i=0; i<len; i++) {
    for(let j=0; j<len; j++) {
      sum = arr[i] + arr[j]
      if(sum===tgt) return true
      sum -= arr[j]
    }
  }
  return false
}
