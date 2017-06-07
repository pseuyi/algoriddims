/*
a->b->c
*/

function Node (val) {
  this.val = val
  this.next = null
}

Node.prototype.add = function (val) {
  let curr = this
  while(curr.next) {
    curr = curr.next
  }
  curr.next = new Node(val)
}

Node.prototype.deleteNode = function (val) {
  let prev = null
  let curr = this

  // delete head
  if(curr.val === val) val

  // delete tail
  while (curr) {
  // delete middle
    if(curr.val === val) {
      if(curr.next) prev.next = curr.next
      else prev.next = null
    }

    prev = curr
    curr = curr.next
  }
}

const testList = new Node('a')
testList.add('b')
testList.add('c')
console.log(testList)
testList.deleteNode('a')
console.log('after delete', testList)
