class StackClass<T> {
    storage: { [key: number]: T};
    index: number;

    constructor() {
        this.storage = {};
        this.index = 0;
    }
    
    push(value: T): void {
        this.storage[this.index++] = value;
        console.log('push', value, 'index now', this.index);
    }

    pop(): T | undefined {
        if (this.index === 0) {
            console.log('pop: stack empty');
            return undefined;
        }
        this.index--;
        const value = this.storage[this.index];
        delete this.storage[this.index];
        console.log('pop', value, 'index now', this.index);
        return value;
    }

    peek(): T | undefined {
        return this.index > 0 ? this.storage[this.index - 1] : undefined;
    }

    size(): number {
        return this.index;
    }

    isEmpty(): boolean {
        return this.index === 0;
    }
 }

 export {};


const numberStack = new StackClass<number>();

numberStack.push(10);
numberStack.push(20);
numberStack.push(30);

console.log(numberStack.storage)