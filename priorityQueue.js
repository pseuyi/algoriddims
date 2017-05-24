class Node {
  constructor (data, priority) {
    this.data = data
    this.priority = priority
    this.next = null
  }
}

class PriorityQueue {
  constructor () {
    this.head = null
  }
  insert (data, priority) {
    const node = new Node (data, priority)
    if(!this.head || node.priority > this.head.priority) {
      const prev = this.head
      this.head = node
      node.next = prev
    }
    else {
      let temp = this.head
      while(node.priority < temp.priority && temp.next) {
        temp = temp.next
      }
      node.next = temp.next
      temp.next = node
    }
  }
  peek () {
    return this.head.data
  }
  popMax () {
    let max = this.head.data
    this.head = this.head.next
    return max
  }
}
