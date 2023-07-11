class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

function mergeKLists (lists) {
  let result = new ListNode(Infinity);
  let next = new ListNode(Infinity);

  while (lists.some(el => typeof(el?.val) === 'number')) {
    let min = new ListNode(Infinity);

    for (const i in lists) {
      if (lists[i]?.val !== null && lists[i]?.val <= min.val) min = lists[i];
    }

    if (result.val === Infinity) {
      result.val = min.val;
    } else if (next.val === Infinity) {
      next.val = min.val;
      result.next = next;
    } else {
      next.next = new ListNode(min.val);
      next = next.next;
    }

    min.val = (min.next !== null ? min.next.val : null);
    min.next = (min.next !== null ? min.next.next : null);
  }

  if (result.val === Infinity) {
    return result.next;
  } else {
    return result;
  }
}
