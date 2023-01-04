var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
  this.value = value;
  this.left  = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.remove = function(value) {
    if (!this.root) return null;

    // find the node
    let parent;
    let target = this.root;
    while (target && target.value !== value) {
      parent = target;
      if (target.value > value) {
        target = target.left;
      } else {
        target = target.right;
      }
    }
    if (!target) return null;

    // remove the node
    // -- zero or one children
    if (!(target.left && target.right)) {
      // ---- root node
      const replacement = target.right ? target.right : target.left;
      if (!parent) {
        this.root = replacement;
      } else {
        // ---- other node
        const direction = parent.left === target ? "left" : "right";
        parent[direction] = replacement;
      }
    } else {
      // -- two children
      // ---- replace current value with smallest child
      const newChildValue = this.findMin(target.right);
      this.remove(newChildValue);
      target.value = newChildValue;
    }
  }

  this.findMin = function(node = this.root) {
    if (!node) return null;
    return node.left ? this.findMin(node.left) : node.value;
  }

  this.findMax = function(node = this.root) {
    if (!node) return null;
    return node.right ? this.findMax(node.right) : node.value;
  }
}