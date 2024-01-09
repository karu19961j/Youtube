class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class LinkedList {
  constructor(value) {
    // 1->null, this.head = 1 , this.tail = 1;
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    // 1->2->null;
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    return this;
  }

  pop() {
    if (!this.head) {
      return null;
    }
    let temp = this.head;
    let pre = this.head;
    // 1->2->null
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unshift(value) {
    // 1->null;
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // newNode = 2; 2.next = 1, head = 2; 2->1->null
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    // 2->1->null ,
    let temp = this.head;
    // head = 1
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    }
    let temp = this.head;
    // 1->2->3->4
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      return this.unshift(value);
    }
    if (index === this.length) {
      return this.push(value);
    }
    // 1->2->3->4->6->5
    const newNode = new Node(value);
    // temp = 4
    const temp = this.get(index - 1);
    // newNode.next = = 4.next
    newNode.next = temp.next;
    // 4.next = 6
    temp.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.unshift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    // 1->2->3->4
    let before = this.get(index - 1);
    let temp = before.next;
    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  reverse() {
    // original ll = 1->2->3->4
    // expected reversed ll = 4->3->2->1
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next; // 2
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next; // 3
      temp.next = prev; // 3.next = null
      prev = temp; // prev = 2
      temp = next; // 3
    }
    return this;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);

console.log(myLinkedList.reverse());
