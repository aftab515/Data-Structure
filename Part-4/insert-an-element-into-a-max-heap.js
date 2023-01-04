var MaxHeap = function() {
  // Only change code below this line
  this.heap = [null];

  this.print = () => [...this.heap];

  let leftChildIndex  = (i) => 2 * i;
  let rightChildIndex = (i) => 2 * i + 1;
  let parentIndex     = (i) => Math.floor(i / 2);

  this.insert = (item) => {
    this.heap.push(item);
    let index = this.heap.length - 1;
    while (index > 1 && item > this.heap[parentIndex(index)]) {
      this.heap[index] = this.heap[parentIndex(index)];
      this.heap[parentIndex(index)] = item;
      index = parentIndex(index);
    }
  }  
  // Only change code above this line
};