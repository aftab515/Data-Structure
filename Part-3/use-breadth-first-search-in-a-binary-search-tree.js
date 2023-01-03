var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
  this.value = value;
  this.left  = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  function traverse(direction, root) {
    const queue = [root];
    const results = [];

    function pushIfThere(node, queue) {
      if (node) queue.push(node);
    }

    while (queue.length > 0) {
      const node = queue.shift();
      results.push(node.value);
      if (direction === "level") {
        // Level order: left to right
        pushIfThere(node.left, queue);
        pushIfThere(node.right, queue);
      } else {
        // Reverse level order: right to left
        pushIfThere(node.right, queue);
        pushIfThere(node.left, queue);
      }
    }

    return results;
  }

  // Level order traversal
  this.levelOrder = function() {
    if (!this.root) return null;

    return traverse("level", this.root);
  }

  // Reverse level order traversal
  this.reverseLevelOrder = function() {
    if (!this.root) return null;

    return traverse("reverseLevel", this.root);
  }
  // Only change code above this line
}