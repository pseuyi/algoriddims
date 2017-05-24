const permut = str => {
  const result = []

  for (let i=0; i<str.length; i++) {
    const prefix = str[i]
    const rest = str.slice(0, i) + str.slice(i+1)

    // base case
    if (rest.length === 1) {
      const perms = combo(prefix, rest[0])
      perms.forEach(perm=>result.push(perm))
    }
    else {
      permut(rest).forEach(suffix=>result.push(prefix+suffix))
    }
  }

  return result.filter((combo, idx)=>result.indexOf(combo)===idx)
}

const combo = (a, b) => {
  return [a+b, b+a]
}

const test = 'abc'
permut(test);
