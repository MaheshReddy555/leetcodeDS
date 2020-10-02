class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQMin {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();

    return this;
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentElem = this.values[parentIdx];
      if (element.priority >= parentElem.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parentElem;
      idx = parentIdx;
    }
  }

  dequeue() {
    let min = this.values[0];
    let end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return min;
  }

  sinkDown() {
    let parentIdx = 0;
    let parentElem = this.values[0];

    let left, right;

    let leftElement, rightElement;
    let swap;

    while (!swap) {
      console.log("*****************", parentIdx);

      left = 2 * parentIdx + 1;
      right = 2 * parentIdx + 2;
      leftElement = this.values[left];
      rightElement = this.values[right];
      swap = null;
      let swapIdx;

      if (left < this.values.length) {
        if (parentElem.priority > leftElement.priority) {
          swapIdx = left;

          swap = leftElement;
        }
      }

      if (right < this.values.length) {
        if (parentElem.priority > rightElement.priority) {
          swapIdx = right;
          swap = rightElement;
        }
      }

      this.values[parentIdx] = swap;
      this.values[swapIdx] = parentElem;
      parentIdx = swapIdx;
    }
  }
}

let ER = new PriorityQMin();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);
ER.enqueue("scar", 9);
ER.dequeue();

console.log(ER.values);
