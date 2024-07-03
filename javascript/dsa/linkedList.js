/*

A linked list is a Linear collection of data elements called "Nodes", each "Node" has an address pointer poiting to another "Node".
Each node holds a single element of data and a link/pointer to the next node in the list.
A "Head Node" is the first node in the list, a "Tail Node" is the last node in the list.

  [ NODE (head) ] -> [ NODE ] -> [ NODE (tail) ] -> null

Needs 2 classes or factories:
  1. LinkedList class/factory, which will represent the full list.
  2. Node class/factory, containing a value property and a link to the nextNode, set both as "null" by default.

*/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  append(data) {
    let node = new Node(data);
    let current;

    // If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  getSize() {
    console.log(`Total Size: ${this.size}`);
  }

  getHead() {
    console.log(`Head [first node]: ${this.head.data}`); 
  }

  getTail() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      console.log(`Linked-list only has 1 node: ${this.head.data}`);
    } else {
      let current = this.head;
      let previous = null;

      while (current.next) {
        previous = current;
        current = current.next;
      }

      console.log(`Tail [last node]: ${current.data}`);
    }
  }

  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(`Value at index ${index}: ${current.data}`);
      }
      count++;
      current = current.next;
    }

    return null;
  }

  contains(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  find(data) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }

    return null;
  }

  toString() {
    let current = this.head;
    let string = "";
    console.log(`Printing Linked-list...`);

    while (current) {
      string += `(${current.data}) -> `;
      current = current.next;
    }

    string += null
    console.log(string);
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }

  insertAt(data, index) {
    // if index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // if first index
    if (index === 0) {
      this.prepend(data);
      return;
    }

    const node = new Node(data);

    let current = this.head; // set current to first
    let previous;
    let count = 0;

    while (count < index) {
      previous = current; // node before index
      count++;
      current = current.next; // node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  pop() {
    // if list is empty, nothing to pop
    if (!this.head) {
      return;
    }

    // if the list only has one node
    if (!this.head.next) {
      this.head = null;
    } else {
      let current = this.head;
      let previous = null;

      // traverse the list to find the second-to-last node
      while (current.next) {
        previous = current;
        current = current.next;
      }

      // remove reference to the last node
      previous.next = null;
    }

    this.size--;
  }

  removeAt(index) {
    // if index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }

    this.size--;
  }
}

const list = new LinkedList();

list.prepend(100);
list.prepend(200);
list.prepend(300);
list.append(400);
list.append(600);
list.insertAt(500, 2);

list.toString();
list.getAt(4);
list.getHead();
list.getTail();
list.getSize();
console.log(list.contains(20));
console.log(list.contains(100));
console.log(list.find(300));
console.log(list.find(500));