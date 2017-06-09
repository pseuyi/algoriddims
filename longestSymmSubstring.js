// Write a function, `longestSymmetricSubstring(string)`, that returns the
// longest substring that is the same forwards and in reverse (for example,
// "abba"). If two substrings are the same length, take the first one.
function longestSymmetricSubstring(str) {
  let longest = str[0]
  let sub = ''

  for(let i=0, len=str.length;i<len;i++) {
    for(let j=i+1, len=str.length;j<len;j++) {
      sub = str.slice(i,j)
      if(isSym(sub) && sub.length > longest.length) longest = sub
    }
  }

  function isSym (str) {
    let a=0
    let b=str.length-1
    while(a<b) {
      if(str[a] !== str[b]) return false
      a++
      b--
    }
    return true
  }

  console.log('longest', longest)

}

longestSymmetricSubstring("aba1cdc")

/*
input: str
output: longest substring

generate substrings
check if palindrome
save longest palindrome

*/




// "aba1cdc" => "aba"
/*
a ab aba aba1....
b ba ba1 ba1c


*/

// "abcdefc" => "a"
// "xabax" => "xabax"
