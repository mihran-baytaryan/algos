class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

var reverseKGroup = function(head, k) {

  let current = head;
  let end = head;
  let count = k - 1;

  if (head?.val === null || head?.val === undefined || head?.next === null) {
    const result = new ListNode();
    return result.next;
  } 

  while (head.next !== null) {
    while (count) {
      if (head.next === null) break;
      end = head.next;
      count--;
    }
  }
  
  
};

const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))

console.log(reverseKGroup())