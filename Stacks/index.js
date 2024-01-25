class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stacks {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return undefined;
    }
    // 2->1->null;
    // temp = 2;
    // top = 1
    // temp = null
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    return this;
  }
}

const myStack̵ = new Stacks(1);
myStack̵.push(2);

console.log("🚀 ~ myStack̵:", myStack̵.pop());
