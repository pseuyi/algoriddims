function coinChange (money, denom) {
  const memo = []
  const ways = []
  denom.forEach(coin=>memo.push([coin]))
  memo.forEach(way=>{
    let waySum = way.reduce((a,b)=>a+b)
    if(waySum===money) ways.push(way)
  })
  return ways
}

console.log(coinChange(4, [1,2,3]))
