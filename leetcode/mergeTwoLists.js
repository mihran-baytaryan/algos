/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

//Recursive Solution//
var mergeTwoLists = function(list1, list2) { 
  if (!list1 && !list2) return null;
  if (list1?.val <= list2?.val || !list2) {
    return new ListNode(list1.val, mergeTwoLists(list1.next, list2))
  } else if (list2.val < list1?.val || !list1) {
    return new ListNode(list2.val, mergeTwoLists(list1, list2.next))
  }
};

//Iterative Solution//
// var mergeTwoLists = function(list1, list2) {
//   let head = new ListNode(0);
//   let current = head;
//   while(list1 && list2) {
//     if (list1.val < list2.val) {
//       current.next = list1;
//       console.log(current.next.val, list1.val)
//       list1 = list1.next;
//       console.log(current.next.val, list1.val)
//     }else{
//       current.next = list2;
//       list2 = list2.next;
//     }
//     console.log(head.val, current.val)
//     current = current.next;
//   }
//   if(list1){
//     current.next = list1;
//   }
//   if(list2){
//     current.next = list2;
//   }
//   return head.next;
// }

list1 = new ListNode(1, (new ListNode(2, new ListNode(4))));
list2 = new ListNode(1, (new ListNode(3, new ListNode(4))));

console.log(mergeTwoLists(list1, list2))

