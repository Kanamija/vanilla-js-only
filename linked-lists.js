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
        // console.log("Created new node:", newNode);

        //Case 1: empty list
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        // console.log("List was empty");
        // console.log("Head now:", this.head.value);
        // console.log("Tail now:", this.tail.value);
            return;
        }
        //Case 2: non-empty list
        // console.log("Old head was:", this.head.value);
        newNode.next = this.head;
        this.head = newNode;

        // console.log("New head is:", this.head.value);
        // console.log("Head.next is:", this.head.next.value);
        // console.log("Tail is still:", this.tail.value);
    }
    append(value) {
        console.log("---- append called with:", value, "----");

        //create new Node
        const newNode = new Node(value);
        // console.log("Created new node:", newNode);

        //Case 1 empty list
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        // console.log("List was empty");
        // console.log("Head now:", this.head.value);
        // console.log("Tail now:", this.tail.value);
            return;
        }

        //Case 2 non-empty list
        // console.log("Old tail was:", this.tail.value);
        // console.log("Old tail.next was:", this.tail.next);
        // console.log("Linking old tail to new node: oldTail.next = newNode");
        this.tail.next = newNode;

        // console.log("Now moving tail pointer to the new node: tail = newNode");
        this.tail = newNode;

        // console.log("head:", this.head.value);
        // console.log("tail:", this.tail.value);
        // console.log("tail.next:", this.tail.next);
    }
    removeFirst() {
        console.log('---removeFirst called---')

        //Case 1: empty list
        if (this.head === null) {
            console.log('List is empty. Nothing to remove.');
            return;
        }

        console.log('Removing head:', this.head.value);

        //Case 2: only one node

        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
            console.log('List is now empty');
            return;
        }

        //Case 3 multiple nodes
        this.head = this.head.next;
        console.log('New head is:', this.head.value);
        console.log('Tail remains:', this.tail.value);

    }
    removeLast() {
        console.log('---removeLast called---');

        //Case 1: empty list
        if (this.head === null) {
            console.log('List is empty. Nothing to remove.');
            return;
        }

        //Case 2: only one node
        if (this.head === this.tail) {
            console.log('Removing the only node:', this.head.value);
            this.head = null;
            this.tail = null;
            return;
        }

        //Case 3: multiple nodes
        let current = this.head;

        console.log('Starting traversal from head:', current.value);

        while(current.next !== this.tail) {
            console.log('Visiting node:', current.value);
            current = current.next

        }
        console.log('Node before tail foind:', current.value);
        console.log('Removing tail:', this.tail.value);
        current.next = null;
        this.tail = current;

        console.log('New tail is:', this.tail.value);
    }
    contains(searchValue) {
    let current = this.head;

    while (current) {
      if (current.value === searchValue) return true;
      current = current.next;
    }

    return false;
  }
   insert(value, position) {
    if (position === null || position <= 0 || !this.head) {
      this.prepend(value);
      return;
    }

    const newNode = new ListNode(value);
    let current = this.head;
    let previous = null;
    let index = 0;

    while (current && index < position) {
      previous = current;
      current = current.next;
      index++;
    }

    if (previous) {
      previous.next = newNode;
      newNode.next = current;

      if (!current) {
        this.tail = newNode; // update tail if we added to the end
      }
    }
  }
   // BONUS: remove first occurrence of value from list
  removeItem(value) {
    if (!this.head) return false;

    if (this.head.value === value) {
      this.head = this.head.next;
      if (!this.head) this.tail = null;
      return true;
    }

    let current = this.head.next;
    let previous = this.head;

    while (current) {
      if (current.value === value) {
        previous.next = current.next;
        if (!current.next) this.tail = previous;
        return true;
      }

      previous = current;
      current = current.next;
    }

    return false;
  }


}

const list = new LinkedList();



list.append(10);
list.append(20);
list.append(30);

console.log(list.contains(40))

// list.removeFirst()
// list.removeFirst()
// list.removeFirst()
// list.removeFirst()

// list.prepend(10);
// list.prepend(20);
// list.prepend(30);

// list.removeLast();
// list.removeLast();
// list.removeLast();
// list.removeLast();


