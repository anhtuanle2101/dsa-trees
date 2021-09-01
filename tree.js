/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let sum = 0;
    if (this.root === null){
      return sum;
    }
    if (this.root.children.length===0){
      return this.root.val;
    }
    const stack = [this.root]
    while (stack.length){
      const currentNode = stack.pop();
      sum += currentNode.val;
      //console.log(currentNode);
      for (let child of currentNode.children){
        stack.push(child);
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let count = 0;
    if (this.root === null){
      return count;
    }
    const queue = [this.root];
    while (queue.length){
      const currentNode = queue.shift();
      if (currentNode.val%2==0){
        count+=1;
      }
      for (let child of currentNode.children){
        queue.push(child);
      }
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let count = 0;
    if (this.root === null){
      return count;
    }
    const stack = [this.root];
    while (stack.length){
      const currentNode = stack.pop();
      if (currentNode.val > lowerBound){
        count++;
      }
      for (let child of currentNode.children){
        stack.push(child);
      }
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
