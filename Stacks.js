"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StackClass = /** @class */ (function () {
    function StackClass() {
        this.storage = {};
        this.index = 0;
    }
    StackClass.prototype.push = function (value) {
        this.storage[this.index++] = value;
        console.log('push', value, 'index now', this.index);
    };
    StackClass.prototype.pop = function () {
        if (this.index === 0) {
            console.log('pop: stack empty');
            return undefined;
        }
        this.index--;
        var value = this.storage[this.index];
        delete this.storage[this.index];
        console.log('pop', value, 'index now', this.index);
        return value;
    };
    StackClass.prototype.peek = function () {
        return this.index > 0 ? this.storage[this.index - 1] : undefined;
    };
    StackClass.prototype.size = function () {
        return this.index;
    };
    StackClass.prototype.isEmpty = function () {
        return this.index === 0;
    };
    return StackClass;
}());
var numberStack = new StackClass();
numberStack.push(10);
numberStack.push(20);
numberStack.push(30);
numberStack.pop();
console.log(numberStack.storage);
