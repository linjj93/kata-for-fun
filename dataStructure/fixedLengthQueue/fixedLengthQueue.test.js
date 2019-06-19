const FixedLengthQueue = require("./fixedLengthQueue");

describe("FixedLengthQueue", () => {
  it("should create an array of length passed in", () => {
    const fixedQueue = new FixedLengthQueue(3);
    expect(fixedQueue.getSize()).toEqual(3);
  });

  it("can enqueue and dequeue", () => {
    const fixedQueue = new FixedLengthQueue(3);
    fixedQueue.enqueue("apple");
    expect(fixedQueue.dequeue()).toEqual("apple");
  });

  it("can maintain the order", () => {
    const fixedQueue = new FixedLengthQueue(3);
    fixedQueue.enqueue("apple");
    fixedQueue.enqueue("banana");
    fixedQueue.enqueue("citrus");
    expect(fixedQueue.dequeue()).toEqual("apple");
    expect(fixedQueue.dequeue()).toEqual("banana");
    expect(fixedQueue.dequeue()).toEqual("citrus");
    expect(fixedQueue.dequeue()).toEqual(undefined);
  });

  it("cannot insert more than the max length", () => {
    const fixedQueue = new FixedLengthQueue(2);
    fixedQueue.enqueue("apple");
    fixedQueue.enqueue("banana");
    expect(() => fixedQueue.enqueue("citrus")).toThrow(Error);
  });

  it("cannot insert more than the max length even after dequeue", () => {
    const fixedQueue = new FixedLengthQueue(2);
    fixedQueue.enqueue("apple");
    fixedQueue.enqueue("banana");
    fixedQueue.dequeue();
    expect(() => fixedQueue.enqueue("citrus")).toThrow(Error);
  });

  it.only("can peek", () => {
    const fixedQueue = new FixedLengthQueue(2);
    expect(fixedQueue.peek()).toEqual(undefined);
    fixedQueue.enqueue("apple");
    fixedQueue.enqueue("banana");
    expect(fixedQueue.peek()).toEqual("apple");
  });
});
