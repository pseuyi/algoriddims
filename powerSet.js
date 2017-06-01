/*
generate subsets
[a, b, c]
[
[], [a], [b], [a,b], [c], [a,c] , [a,b,c]
]

*/


function powerSet (str) {
  const powerSets = [[]]
  for(let i=0, len=str.length; i<len; i++) {
    powerSets.forEach(set=>powerSets.push(set.concat(str[i])))
  }
  return powerSets
}

// powerSet('abc')
