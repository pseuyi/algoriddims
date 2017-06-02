// tree structure
function BinarySearchTree (value) {
  this.value = value
  this.magnitude = 1
}
BinarySearchTree.prototype.insert = function(value) {
  this.magnitude++
  var direction = value < this.value ? 'left' : 'right'
  if (!this[direction]) this[direction] = new BinarySearchTree(value)
  else this[direction].insert(value)
}

// test tree
const bst = new BinarySearchTree(20)
bst.insert(15)
bst.insert(5)
bst.insert(25)
bst.insert(28)
bst.insert(21)
bst.insert(17)
bst.insert(19)
bst.insert(1)

// function largestSmallerBSTKey (root, x) {
//   let curr = root
//   if(x<=curr.value && x>curr.left.value) return curr.left.value
//   if(x>curr.value && x<=curr.right.value) return curr.value
//   if(x<curr.value && x<curr.left.value) return largestSmallerBSTKey(curr.left, x)
//   if(x>curr.value && x>curr.right.value) return largestSmallerBSTKey(curr.right, x)
// }

function largestSmallerBSTKey (root, x) {
  let result = null
  while (root != null) {
      if (root.value < x) {
        result = root.value
        root = root.right
      }
      else root = root.left
  }
  return result

}

// largestSmallerBSTKey(bst, 20) // expect 19
// largestSmallerBSTKey(bst, 28) // expect 25
 largestSmallerBSTKey(bst, 19) // expect 17
