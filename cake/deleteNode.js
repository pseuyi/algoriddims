/*
delete a node in a singly linked list
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
  return curr.next
}

/*
O(n) solution that walks through entire list taking a value
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
*/

/*
O(n) solution that takes a node reference and reassigns nodes
doens't delete last node
function deleteNode (node) {
  while(node){
    node.val = node.next.val
    node.next = !node.next.next? null : node.next

    node = node.next
  }
  return node
}
*/

/*
O(1) solution that has side effects that takes node reference
*/

function deleteNode (node) {
  try {
    node.val = node.next.val
    node.next = node.next.next
  }
  catch (err) {
    throw new Error("cannot delete last node")
  }
  return node
}

const testList = new Node('a')
testList.add('b')
testList.add('c')
const nodeToDelete = testList.add('d')
deleteNode(nodeToDelete)
console.log(testList)
