// do not use any native array methods
class Queue<T> {
  storage: { [key: number]: T } = {};
  front: number = 0;
  rear: number = 0;

  enqueue(value: T): void {
    this.storage[this.rear++] = value;
  }

  dequeue(): T | undefined {
    if (this.front === this.rear) return undefined;

    const value = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return value;
  }

  isEmpty(): boolean {
    return this.front === this.rear;
  }

  peek(): T | undefined {
    return this.isEmpty() ? undefined : this.storage[this.front];
  }

  size(): number {
    return this.rear - this.front;
  }
}

// ✅ type-safe usage examples:

const numberQueue = new Queue<number>();
numberQueue.enqueue(10);
numberQueue.enqueue(5);
// numberQueue.enqueue("hi"); // ❌ TypeScript error (good!)
console.log(numberQueue.dequeue()); // number | undefined

const stringQueue = new Queue<string>();
stringQueue.enqueue("a");
stringQueue.enqueue("b");
console.log(stringQueue.peek()); // string | undefined

export { Queue };
