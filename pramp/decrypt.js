/*
decrypt a message that has this encryption scheme:
Convert every letter to its ASCII value. Add 1 to the first letter, and for every letter from the second to the last, add to it the value of the previous letter. Subtract 26 from every letter until it is in the range of lowercase letters a-zin ASCII. Convert the values back to letters.
*/

function decrypt(word) {
  let decrypted = []
  let prev = 1;

  for(let i=0,len=word.length; i<len; i++) {
    let char = word.charCodeAt(i)
    char -= prev

    while(char < 97) {
      char += 26
    }

    prev += char
    decrypted.push(char)
  }

  return String.fromCharCode(...decrypted)
}

decrypt('dnotq')
decrypt('flgxswdliefy')
