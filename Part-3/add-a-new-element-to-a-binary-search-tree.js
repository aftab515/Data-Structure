var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
  this.value = value;
  this.left  = null;
  this.right = null;
};

function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.add = function(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return undefined;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === newNode.value) {
        return null;
      }

      const direction = currentNode.value > newNode.value ? "left" : "right";
      if (!currentNode[direction]) {
        currentNode[direction] = newNode;
        return undefined;
      }

      currentNode = currentNode[direction];
    }
  }
  // Only change code above this line
}