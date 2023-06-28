function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next)
}

var swapPairs = function (head) {
  if (head?.val === null || head?.val === undefined || head.next === null) {
    return head;
  } 
  
  const result = new ListNode(head.next.val, new ListNode(head.val));
  let current = result.next;
  let next = head.next.next;

  while (next !== null) {
    if (next.next === null) {
      current.next = next;
      next = next.next;
      current = current.next;
    } else {
      let temp = next.next.next;
      current.next = next.next;
      current.next.next = next;
      next.next = temp;
      current = current.next.next
      next = temp;
    }  
  }
  return result;
}
