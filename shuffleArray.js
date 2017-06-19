const randomiseArray = arr => {
    const buffer = []
    let idx
    while(arr.length) {
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

const test = [1,2,3,4]
console.log(randomiseArray(test))
