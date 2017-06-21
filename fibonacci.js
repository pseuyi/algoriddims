/*
get the nth number in a fibonacci sequence
*/

function fibonacci (n) {
  if(n<=2)return 1
  return fibonacci(n-1) + fibonacci(n-2)
}

// console.log(fibonacci(5))
// 1 1 2 3 5

/*
generate a fibonacci sequence of n length
*/

function fibSequence (n) {
  const seq = []
  let i = 0, p, q

  while (i<n) {
    p = i-1 < 0 ? 1 : seq[i-1]
    q = i-2 < 0 ? 0 : seq[i-2]
    seq[i] = p + q
    console.log(seq[i])
    i++
  }
}

// fibSequence(5)
