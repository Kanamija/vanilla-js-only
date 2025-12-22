class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    prepend(value) {
        //Case 1: invalid input
        if (value === null) {
            return null;
        }
        //Create new node
        const newNode = new Node(value);
        //Case 2: empty list
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        //Cse 3: non-empty list
        newNode.next = this.head;
        this.head = newNode;
    }
}

const list = new LinkedList();

list.prepend(10);
list.prepend(20);
list.prepend(30);

let current = list.head;
while (current) {
    console.log(current.value);
    current = current.next;
}