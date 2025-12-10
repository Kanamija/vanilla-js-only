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
list.append(10);
list.print()
list.append(20);
list.print()

list.append(30);
list.print()


