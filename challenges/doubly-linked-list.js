/*
  * Below, you are provided the construtors for a doubly linked list as well as a constructor for the nodes it's composed of
  * Construct a doubly linked list & modify it's prototype to contain methods named 'add' and 'remove'
  * The 'add' method should add an additional node to the end of the doubly linked list
  * The 'remove' method should remove the first instance of a node containing a specific value from the doubly linked list
  
  Example doubly linked list
  null <-> 4 <-> 9 <-> 2 <-> 1 <-> null

  Example after using 'add' method to add 6
  null <-> 4 <-> 9 <-> 2 <-> 1 <-> 6 <-> null

  Example after using 'remove' method to remove 2
  null <-> 4 <-> 9 <-> 1 <-> 6 <-> null

  NOTE: must use non-arrow functions for object constructors and prototype methods
  @see: https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/
*/

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
This method should add a node to the end of the doubly linked list
 */
DoublyLinkedList.prototype.add = function (val) {
  node = new ListNode(val);
  if (!this.head) {
    this.head = this.tail = node;
  }
  else {
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
};

/*
This method should remove the first instance of a node with the inputted value from the doubly linked list
 */
DoublyLinkedList.prototype.remove = function (val) {
  let node = this.head;
  while (node) {
    if (node.val === val) break;
    else (node = node.next); 
  }
  if (this.head === node && this.tail === node) {
    this.head = null;
    this.tail = null;
  } else if (this.head === node) {
    this.head = node.next;
    node.next.prev = null;
    node.next = null;
  } else if (this.tail === node) {
    this.tail = node.prev;
    node.prev.next = null;
    node.prev = null;
  } else {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.next = null;
    node.prev = null;
  }
  return;
};

module.exports = { DoublyLinkedList };
