class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

function mergeKLists (lists) {
  let result = new ListNode(Infinity);
  let next = new ListNode(Infinity);
  
  while (lists.some(el => el?.val !== null)) {
    let min = new ListNode(Infinity);

    for (let i = 0; i < lists.length; i++) {
        if (lists[i].val === null) continue;
        if (lists[i].val <= min.val) min = lists[i];
    }

    if (result.val === Infinity) {
      result.val = min.val
    } else if (next.val === Infinity) {
      next.val = min.val
      result.next = next;
    } else {
      next.next = new ListNode(min.val)
      next = next.next
    }

    if (min.next !== null) {
      min.val = min.next.val;
      min.next = min.next.next;
    } else {
      min.val = null;
    }

  }

  if (result.val === Infinity) {
    return result.next;
  } else{
    return result;
  }

}


const lists = [new ListNode(0, new ListNode(2))];

console.log(mergeKLists(lists))

