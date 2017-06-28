/*
find the kth to last node in a singly linked lists, given an integer k and a head node
*/

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

//working solution
function kthToLastNode (k, node) {
  let size = 0, curr = node, i = 0

  while (curr) {
    curr = curr.next
    size++
  }

  curr = node
  while (i<size-k) {
    curr = curr.next
    i++
  }

  return curr
}

//runner solution
/*
function kthToLastNode (k, node) {
  let curr = node
  let kthToLast
  let i = 0

  while (curr) {
    kthToLast = curr
    // traverse list in k steps
    while(i<k) {
      curr = curr.next || null
      i++
    }
    i = 0
  }

  return kthToLast
}
*/


console.log(kthToLastNode(2, a))
// returns the node with value "Devil's Food" (the 2nd to last node)
