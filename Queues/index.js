class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) {
      return undefined;
    }
    // 1->2->null
    // temp = 1;
    // this.first = 1 --> before pointing to next;
    // after pointing to next(line no 42) this.first = 2
    // temp.next = null which means 1.next = null
    let temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }
    this.length--;
    return this;
  }
}

const myQueue = new Queue(1);
myQueue.enqueue(2);
console.log("🚀 ~ myQueue:", myQueue.dequeue());
