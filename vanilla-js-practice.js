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
    print() {
        if(this.isEmpty()) {
            console.log('List is empty');
        } else {
         let curr = this.head;
         let listValues = [];
         while(curr) {
            listValues.push(curr.value),
            curr = curr.next;
            // console.log('curr from inside while loop:', curr)
         }   
         console.log(listValues.join(' '));
        }
    }
}

const list = new LinkedList();
console.log('List is empty?', list.isEmpty());
console.log('List size:', list.getSize());
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.prepend(40);
list.prepend(50);
list.prepend(60);
list.prepend(70);
list.prepend(80);
list.prepend(90);
list.prepend(100);
list.print()
