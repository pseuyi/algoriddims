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

function pairSum (arr, tgt) {
  const len = arr.length
  const memo = {}
  for(let i=0; i<len; i++) {
    let diff = tgt - arr[i]
    if(memo[diff]) return true
    else memo[arr[i]] = true
  }
  return false
}

//pairSumNaive([6,4,3,2,1,7], 9)
//console.log(pairSum([6,4,3,2,1,7], 2))
