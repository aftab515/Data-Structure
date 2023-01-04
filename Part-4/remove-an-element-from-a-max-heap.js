var MaxHeap = function() {
  this.heap = [null];
  this.insert = (ele) => {
    var index = this.heap.length;
    var arr = [...this.heap];
    arr.push(ele);
    while (ele > arr[Math.floor(index / 2)] && index > 1) {
      arr[index] = arr[Math.floor(index / 2)];
      arr[Math.floor(index / 2)] = ele;
      index = Math.floor(index / 2);  // (*)
    }
    this.heap = arr;
  }
  this.print = () => {
    return this.heap.slice(1);
  }
  // Only change code below this line
  this.remove = () => {
    this.heap = [...this.heap];
    let max = this.heap[1];
    let last = this.heap.pop();
    this.heap[1] = last;
    this.heapify(1);
    return max;
  }

  this.heapify = (i) => {
    let large = i;
    let l = 2 * i + 0;
    let r = 2 * i + 1;
    let length = this.heap.length;
    if (l < length && this.heap[l] > this.heap[large]) {
      large = l;
    }

    if (r < length && this.heap[r] > this.heap[large]) {
      large = r;
    }

    if (large != i) {
      let temp = this.heap[i];
      this.heap[i] = this.heap[large];
      this.heap[large] = temp;
      this.heapify(large);
    }
  }
  // Only change code above this line
};