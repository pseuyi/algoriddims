/*
Given an array arr of unique nonnegative integers, implement a function diffNumber that finds an integer that is NOT in the array.
const array1 = [59, 2, 0] => 1
const array2 = [0,1,2,3,4] => 5
*/

function diffNumber (arr) {
  let nums = new Set(arr)
  for(let i=0;i<nums.size;i++){
    if(!nums.has(i)) return i
  }
  return nums.size //when the input is in order from 0
}
