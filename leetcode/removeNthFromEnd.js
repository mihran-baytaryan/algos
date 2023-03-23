// function removeNthFromEnd(head, n) {
//   if (n === undefined) return head;
//   if (head.next === null) {
//     return head.next;
//   };
//   let cache = {};
//   let index = 1;
//   let current = head;
//   while (current) {
//     cache[index++] = current;
//     if (current.next) {
//       current = current.next;
//     } else break;
//   }

//   if (n === +(Object.keys(cache))[Object.keys(cache).length - 1]) return head.next;
//   index = +(Object.keys(cache))[Object.keys(cache).length - 1] - n;
//   if (cache[index + 2]) {
//     if (cache[index]) cache[index].next = cache[index + 2]; 
//   } else if (cache[index]){
//     cache[index].next = null; 
//   }
//   return head;
// };

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function removeNthFromEnd(head, n) {
  if (n === undefined) return head;
  if (head === null || head.next === null) return null;

  let sentinel = new ListNode(0, head);
  let p = sentinel;
  let q = head;
  for (let i = 0; i < n; i++) {
    q = q.next
  }

  while(q) {
    p = p.next;
    q = q.next;
  }
  p.next = p.next.next;

  return sentinel.next;
}

const head = new ListNode(1);

console.log(removeNthFromEnd(head, 1))
