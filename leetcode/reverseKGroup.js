class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

var reverseKGroup = function(head, k) {

  //bonus: solve in 0(1) extra memory space
    //does creating a temp variable that is a shallow copy of list stay within 0(1) because it is a pointer and not a new object?

  //base cases:
    //length of head <= 1
    //k <= heads or remainder of heads length
    //RETURN head (modified in place or not)

  //reversing a singly linked list:
    //


};

const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))

console.log(reverseKGroup(list, 2))