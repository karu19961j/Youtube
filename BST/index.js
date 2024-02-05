class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let temp = this.root;
      while (true) {
        if (newNode.value === temp.value) {
          return undefined;
        }
        if (newNode.value < temp.value) {
          if (temp.left === null) {
            temp.left = newNode;
            return this;
          }
          temp = temp.left;
        } else {
          if (temp.right === null) {
            temp.right = newNode;
            return this;
          }
          temp = temp.right;
        }
      }
    }
  }

  contains(value) {
    if (!this.root) {
      return false;
    }
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }

  minValueNode(currentNode) {
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  // FIND HIGHESTNODE IN THE TREE
}

const myBST = new BST();
myBST.insert(10);
myBST.insert(9);
myBST.insert(7);
myBST.insert(20);

console.log("🚀 ~ myBST:", myBST.minValueNode(myBST.root));
