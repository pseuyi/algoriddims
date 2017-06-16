/*
get all prime numbers up to n
*/

function primes(n) {
  const primes = []
  let i = 2

  while (primes.length < n) {
    if (isPrime(i)) primes.push(i)
    i++
  }
  return primes
}


function isPrime (num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false
  }
  return true
}

primes(10) // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ]
