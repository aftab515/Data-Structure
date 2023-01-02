function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };

  // Only change code below this line
  this.addAt = function(index,element){
    let node = new Node(element)
    if(index > length || index < 0 ){
      return false
    }
    if(index == 0){
      node.next = head
      head = node;
      length++
    }else{
      let currentNode = head;
      let currentIndex = 0;
      let previousNode = null;
      while(currentIndex < index){
        previousNode = currentNode;
        currentNode = currentNode.next
        currentIndex++
      }
      if(currentIndex == index){
        node.next = currentNode.next
        previousNode.next = node;
        length++
      }
    }
  }

  // Only change code above this line
}