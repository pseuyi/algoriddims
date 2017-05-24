const randomiseArray = arr => {
    const buffer = [], len = arr.length
    let idx, i
    for(i=0; i<len; i++) {
        idx = Math.floor(Math.random()*arr.length)
        buffer.push(arr.splice(idx, 1)[0])
    }
    return buffer
}

const fisherYatesShuffle = arr => {
  let i = arr.length, j

  while (i--) {
    j = Math.floor(Math.random() * i)
    swap(i, j, arr)
  }

  return arr
}

const swap = (a, b, arr) => {
    const tmp = arr[a]
    arr[a] = arr[b]
    arr[b] = tmp
}
