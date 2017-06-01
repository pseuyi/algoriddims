// var array = [14, 7, 3, 12, 9, 11, 6, 2];

function mergeSort (arr) {
  if(arr.length===1) return arr
  //divide arr in half
  const m = Math.floor(arr.length/2)
  const left = mergeSort(arr.slice(0, m))
  const right = mergeSort(arr.slice(m))
  return merge(left, right)
}

//merge 2 presorted arrays
function merge (a, b) {
  const merged = []
  while(a.length && b.length) {
    if(a[0]<b[0]) merged.push(a.shift())
    else merged.push(b.shift())
  }
  //leftovers
  while(a.length) {
    merged.push(a.shift())
  }
  while(b.length) {
    merged.push(b.shift())
  }
  return merged
}
