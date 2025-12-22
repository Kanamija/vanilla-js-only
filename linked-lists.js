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
        console.log("---- prepend called with:", value, "----");

        //Create new node
        const newNode = new Node(value);
        console.log("Created new node:", newNode);

        //Case 1: empty list
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        console.log("List was empty");
        console.log("Head now:", this.head.value);
        console.log("Tail now:", this.tail.value);
            return;
        }
        //Case 2: non-empty list
        console.log("Old head was:", this.head.value);
        newNode.next = this.head;
        this.head = newNode;

        console.log("New head is:", this.head.value);
        console.log("Head.next is:", this.head.next.value);
        console.log("Tail is still:", this.tail.value);
    }
    append(value) {
        console.log("---- append called with:", value, "----");

        //create new Node
        const newNode = new Node(value);
        console.log("Created new node:", newNode);

        //Case 1 empty list
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        console.log("List was empty");
        console.log("Head now:", this.head.value);
        console.log("Tail now:", this.tail.value);
            return;
        }

        //Case 2 non-empty list
        console.log("Old tail was:", this.tail.value);
        console.log("Old tail.next was:", this.tail.next);
        console.log("Linking old tail to new node: oldTail.next = newNode");
        this.tail.next = newNode;

        console.log("Now moving tail pointer to the new node: tail = newNode");
        this.tail = newNode;

        console.log("head:", this.head.value);
        console.log("tail:", this.tail.value);
        console.log("tail.next:", this.tail.next);
    }
}

const list = new LinkedList();

// list.prepend(10);
// list.prepend(20);
// list.prepend(30);

list.append(10);
list.append(20);
list.append(30);