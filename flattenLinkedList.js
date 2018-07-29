const flattenLL = (ll) => {
  let storedNode;
  let parent = true;
  let currNode = ll.head;
  while(currNode.next && parent){
    if(currNode.child){
      storedNode = currNode.next;
      currNode.next = currNode.child;
      currNode.child = null;
      parent = false;
      while(currNode.next){
        currNode = currNode.next;
      }
      currNode = storedNode;
      parent = true;
      currNode = currNode.next;
    }
  }
  return ll;
}

// Creating ll to test
let testList = new LinkedList();
let testListChild = new LinkedList();
testList.insertAtHead(1);
testList.insertAtEnd(2);
testList.insertAtEnd(3);
testList.insertAtEnd(4);
testList.insertAtEnd(5);
testList.insertAtEnd(6);
testList.insertChild(2, 9;)

console.log(testList)

flattenLL(testList)
console.log(testList)

// node and ll code to test function
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.child = null;
  }
};

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    return this;
  }

  insertAtEnd(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    return this;
  }

  find(value) {
    if (!this.head) {
      throw new Error('The linked list is empty');
    }

    if (this.head.value === value) {
      return this.head;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        return currentNode.next;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
  
    insertChild(value, childValue) {
    const node = new Node(childValue);
    if (!this.head) {
      throw new Error('The linked list is empty');
    }

    if (this.head.value === value) {
      this.child = node(childValue);
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode = currentNode.next;
        currentNode.child = node;
        return this;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
};