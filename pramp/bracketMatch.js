/*
write a function bracketMatch that takes a bracket string as an input and returns the minimum number of brackets you’d need to add to the input in order to make it correctly matched

str = “(())”
=> 0

str = “())(”
=> 2

*/

function bracketMatch (str) {
  let i = 0
  let open = 0
  let need = 0
  while(i<str.length) {
    let char = str[i++]
    char === '(' ? open++ : open--
    // extra closing bracket, need one more opening bracket
    if (open < 0) {
      need++
      open = 0
    }
    // i++
  }
  // if there are any extra opening brackets, add num extra to need
  return need += open
}
