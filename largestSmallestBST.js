// function largestSmallerBSTKey (root, x) {
//   console.log('root is', root)
//   let curr = root
//   if(x<=curr.value && x>curr.left.value) return curr.left.value
//   if(x>curr.value && x<=curr.right.value) return curr.value
//   if(x<curr.value && x<curr.left.value) return largestSmallerBSTKey(curr.left, x)
//   if(x>curr.value && x>curr.right.value) return largestSmallerBSTKey(curr.right, x)
// }

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
BinarySearchTree.prototype.depthFirstForEach = function(iterator, order) {
  if (order === 'pre-order') iterator(this.value)
  if (this.left) this.left.depthFirstForEach(iterator, order)
  if (!order || order === 'in-order') iterator(this.value)
  if (this.right) this.right.depthFirstForEach(iterator, order)
  if (order === 'post-order') iterator(this.value)
}

const bst = new BinarySearchTree(20)
bst.insert(15)
bst.insert(5)
bst.insert(25)
bst.insert(28)
bst.insert(21)
bst.insert(17)
bst.insert(19)
bst.insert(1)
//console.log(bst)
// let arr = []
// bst.depthFirstForEach(function(val){ arr.push(val) }, 'in-order')
//console.log(arr)


function largestSmallerBSTKey (root, x) {
  // let node = root
  // let dir = node.value<x? 'right' : 'left'
  // if(node[dir] && node[dir].value<x){
  //   return largestSmallerBSTKey(node[dir], x)
  // }
  // else return node.value

  let result = null
  while (root != null) {
      if (root.value < x) {
        result = root.value
        root = root.right
      }
      else root = root.left
  }
  return result

  // let node = root

  // if(node.value<x && node['right'] && node['right'].value<x)
  //   return largestSmallerBSTKey(node['right'], x)
  // if(node.value>x && node['left'] && node['left'].value<x)
  //   return largestSmallerBSTKey(node['left'], x)
  // else return node.value
}


// largestSmallerBSTKey(bst, 20) // expect 15
// largestSmallerBSTKey(bst, 28) // expect 25
 largestSmallerBSTKey(bst, 19) // expect 17
