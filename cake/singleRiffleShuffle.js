/*
shuffle a virtual deck of cards. take an arr of int 1...52 that represents 52 cards and return a shuffled deck
*/

const deck = new Array(52).fill().map((el,i)=>++i)

function riffle (arr) {
  const mid = Math.floor(arr.length/2)
  const half1 = arr.slice(0, mid)
  const half2 = arr.slice(mid+1)
  let shuffled = []
  while (shuffled.length <52 && half1.length && half2.length) {
    let i = Math.round(Math.random() * half1.length)
    let j = Math.round(Math.random() * half2.length)
    let left = half1.splice(i)
    let right = half2.splice(j)
    left.map(el=>shuffled.push(el))
    right.map(el=>shuffled.push(el))

  }
  if(half1.length) shuffled.concat(half1)
  if(half2.length) shuffled.concat(half2)

  return shuffled
}

console.log(riffle(deck))
