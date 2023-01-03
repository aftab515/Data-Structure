var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
  this.value = value;
  this.left  = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  // In-order traversal
  this.inorder = function() {
    if (!this.root) return null;

    function traverse(node) {
      if (!node) return [];
      const nodes = traverse(node.left);   // Left
      nodes.push(node.value);              // Root (in-order)
      nodes.push(...traverse(node.right)); // Right
      return nodes;
    }

    return traverse(this.root);
  }

  // Pre-order traversal
  this.preorder = function() {
    if (!this.root) return null;

    function traverse(node) {
      if (!node) return [];
      const nodes = [node.value];          // Root (pre-order)
      nodes.push(...traverse(node.left));  // Left
      nodes.push(...traverse(node.right)); // Right
      return nodes;
    }

    return traverse(this.root);
  }

  // Post-order traversal
  this.postorder = function() {
    if (!this.root) return null;

    function traverse(node) {
      if (!node) return [];
      const nodes = traverse(node.left);   // Left
      nodes.push(...traverse(node.right)); // Right
      nodes.push(node.value);              // Root (post-order)
      return nodes;
    }

    return traverse(this.root);
  }
  // Only change code above this line
}