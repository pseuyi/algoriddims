/*
input:  arr = ['f','i','r','e',' ',
               'o','n',' ',
               'c','a','t']

output: ['c','a','t',' ',
         'o','n',' ',
         'f','i','r','e']
*/

function sentenceReverse (arr) {
  const spaces = []
  let start = 0, end, space

  arr.reverse()

  arr.forEach((char, i)=>{
    if(char===' ') spaces.push(i)
  })
  spaces.push(arr.length) // not a space but want to reverse last word

  // reverse the word between ea interval btwn start and a space
  while(spaces.length) {
    start = space+2 || start
    space = spaces.shift()-1
    end = space
    while(start<end) {
      swap(arr, start, end)
      start++
      end--
    }

  }
  return arr
}

function swap (arr, a, b) {
  const tmp = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}

function notEfficient (arr) {
  return arr.join('').split(' ').reverse().join(' ').split('')
}

// test cases
const input = ['f','i','r','e',' ',
               'o','n',' ',
               'c','a','t']
sentenceReverse(input)
const empty = []
sentenceReverse(empty)
const spacey = [' ', ' ']
sentenceReverse(spacey)
const single = ['e','v','i','l']
sentenceReverse(single)
