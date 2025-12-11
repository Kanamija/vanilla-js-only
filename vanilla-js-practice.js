class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
    prepend(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    insert(value, index) {
        if (index < 0 || index > this.size) {
            console.log('Please enter a valid index')
            return;
        }
        if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let current = this.head;
            for(let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            node.next = current.next;
            current.next = node;
            this.size++;
        }
        }
      removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            removedNode = current.next;
            current.next = removedNode.next;
        }
        this.size--
        return removedNode.value;
      }  
    append(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next !== null) {
            // console.log('current inside while loop:', current);
            current = current.next;
        }
            current.next = node;
        }
        // console.log('node:', node);
        console.log('head:', this.head)
        this.size++
    }
    print() {
        if(this.isEmpty()) {
            console.log('List is empty');
        } else {
            let current = this.head;
            let listValues = '';
            while(current) {
                listValues += `${current.value} `;
                current = current.next;
            }
            console.log(listValues);
        }
    }
}
const list = new LinkedList();
console.log('List is empty?', list.isEmpty());
console.log('List size ', list.getSize());
// list.print();

list.insert(10, 0);
// list.print();

list.insert(20, 0);
// list.print();

list.insert(30, 1);
// list.print();

list.insert(40, 2);
// list.print();
// // console.log(list.getSize());

console.log(list.removeFrom(10));
console.log(list.removeFrom(0));
list.print();
console.log(list.removeFrom(1));
list.print()
