/*
find the first overlap in availability for two schedules. schedules are arrays of int pairs that represent start and end of availability
*/
function meetingPlanner (slotA, slotB, dur) {
  var start, end, a, b

  a = slotA.shift()
  b = slotB.shift()

  while(a && b) {

    start = Math.max(a[0], b[0])
    end = Math.min(a[1], b[1])

    if(end-start >= dur) {
      return [start, start+dur]
    }

    if(a[0] < b[0]) {
      a = slotA.shift()
    }
    else {
      b = slotB.shift()
    }
  }
  return null

}

var slotA = [[10, 50], [60, 120], [140, 160]]
var slotB = [[0, 15], [60, 70]]
var dur = 8

console.log(meetingPlanner(slotA, slotB, dur)) // [60, 68]

var slotA2 = [[0, 5], [10, 20], [70, 80], [110, 150]]
var slotB2 = [[0, 10], [50, 70], [80, 90]]
var dur2 = 12

//console.log(meetingPlanner(slotA2, slotB2, dur2))
