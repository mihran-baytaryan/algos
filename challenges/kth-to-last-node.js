/**
 * Write a function that takes two parameters (an integer, and the head of a
 * singly linked list) and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 * 
 * Additional Information:
 *  - invalid inputs should return undefined
 *  - should find the last node by passing in 1
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

// function kthToLastNode(k, head){      //iterative approach
//   if (!k||!head) return;

//   let counter = 0;
//   let node = head;

//   while (node) {
//     counter++;
//     node.index = counter;
//     node = node.next;
//   }

//   node = head;
//   while(node) {
//     if (node.index === (counter - (k-1))) return node.value;
//     node = node.next;
//   }
  
// }

function kthToLastNode(k, head){                 //recursive approach
  if (!k||!head) return;

  function inner(node, counter=0, length) {
    if (node === null) {
      length = counter;
      return length;
    }
    counter ++;
    length = inner(node.next, counter);
    if (length - (k-1) <= 0) return;
    if (counter === (length - (k-1))) return node.value;
    else return length;
  }

  return inner(head)
}


//Do not delete! 
module.exports = {Node, kthToLastNode};

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// console.log(kthToLastNode(1, a))