"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
// do not use any native array methods
var Queue = /** @class */ (function () {
    function Queue() {
        this.storage = {};
        this.front = 0;
        this.rear = 0;
    }
    Queue.prototype.enqueue = function (value) {
        this.storage[this.rear++] = value;
    };
    Queue.prototype.dequeue = function () {
        if (this.front === this.rear)
            return undefined;
        var value = this.storage[this.front];
        delete this.storage[this.front];
        this.front++;
        return value;
    };
    Queue.prototype.isEmpty = function () {
        return this.front === this.rear;
    };
    Queue.prototype.peek = function () {
        return this.isEmpty() ? undefined : this.storage[this.front];
    };
    Queue.prototype.size = function () {
        return this.rear - this.front;
    };
    return Queue;
}());
exports.Queue = Queue;
// ✅ type-safe usage examples:
var numberQueue = new Queue();
numberQueue.enqueue(10);
numberQueue.enqueue(5);
// numberQueue.enqueue("hi"); // ❌ TypeScript error (good!)
console.log(numberQueue.dequeue()); // number | undefined
var stringQueue = new Queue();
stringQueue.enqueue("a");
stringQueue.enqueue("b");
console.log(stringQueue.peek()); // string | undefined
