module.exports = class FixedLengthQueue {
  constructor(length) {
    // create array with null values equal to length
    this.seq = new Array(length);
    this.nextEnqueueSlot = 0;
    this.nextDequeueSlot = 0;
  }

  getSize() {
    return this.seq.length;
  }
  enqueue(item) {
    if (this.nextEnqueueSlot > this.seq.length - 1) {
      throw new Error("cannot enqueue");
    } else {
      this.seq[this.nextEnqueueSlot] = item;
      this.nextEnqueueSlot++;
    }
  }

  dequeue(item) {
    // console.log(this.seq);
    const result = this.seq[this.nextDequeueSlot];
    this.seq[this.nextDequeueSlot] = undefined;
    this.nextDequeueSlot++;
    return result;

    // console.log(this.seq.length);
    return result;
    // console.log(this.seq);
    // this.seq.pop(item);
    // console.log(this.seq);
  }

  peek() {}
};
