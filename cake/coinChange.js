function coinChange (money, denom) {
  const memo = []
  const ways = []

  if(money < 0) return

  denom.forEach(coin=>memo.push([coin]))

  memo.forEach(way=>{
    let waySum = way.reduce((a,b)=>a+b)
    if(waySum===money) {
      ways.push(way)
    }
    else if (waySum < money) {
      coinChange (money - waySum, denom).forEach(sub=>{
        const perm = way.concat(sub)
        // the resulting perumation should add up to the tgt amt, so add it to ways
        ways.push(perm)
      })
    }
  })
  // the resulting ways arrays has duplicates...
  return ways
}

console.log(coinChange(4, [1,2,3]))
