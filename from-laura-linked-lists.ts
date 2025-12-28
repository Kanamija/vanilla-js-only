// make ListNode generic to be more specific about the type of value it holds
// do not use any native array methods
class ListNode<T> {
  value: T;
  next: ListNode<T> | null = null;

  constructor(val: T) {
    this.value = val;
  }
}

// initialize linkedList property types
class LinkedList<T> {
  head: ListNode<T> | null = null;
  tail: ListNode<T> | null = null;

  // constructor is not necessary, but can be used to initialize the list if needed

  // append() = push()
  // the append method adds node to END of LIST / TAIL
  push(value: T): void {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // non-null assertion operator (!) is used to tell TypeScript that tail is not null
      // it is safe here because we check if head is null above
      this.tail!.next = newNode;
      this.tail = newNode;
    }
  }

  // returns true if value is present in the list
  contains(value: T): boolean {
    let current = this.head;

    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }

    return false;
  }

  // prepend() is a method that ADDS to the BEGINNING of the LIST/HEAD
  // addToHead() = prepend()
  addToHead(value: T): void {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // BONUS: insert an item at the position specified (0-based)
  insert(value: T, position: number | null): void {
    if (position === null || position <= 0 || !this.head) {
      this.addToHead(value);
      return;
    }

    const newNode = new ListNode(value);
    let current = this.head;
    let previous: ListNode<T> | null = null;
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
  removeItem(value: T): boolean {
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

  // BONUS: remove element at specified position in list
  removePosition(position: number) {}
}

export { ListNode, LinkedList };
