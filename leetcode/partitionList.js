/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

function ListNode(val, next) {
    this. val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/** 
Challenge: Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions. 
*/

//parameters: listNode and num, output is a new listNode
//2 pointer solution[On time and O2n space complexity):
//declare left (< x) and right (>= x) lists and pointers for each, also a pointer for input list
//iterate through input list, add nodes to left and right lists accordingly
//merge lists and return

const partition = function(head, x) {
    let cur = head;
    let left;
    let curL;
    let right;
    let curR;

    while (cur) {
        if (cur.val < x) {
            if (!left) {
                left = cur;
                curL = cur;
            } else if (left) {
                curL.next = cur;
                curL = curL.next;
            }
            if (right) {
                curR.next = cur.next
            }
        }
        if (cur.val >= x) {
            if (!right) {
                right = cur;
                curR = cur;
            } else if (right) {
                curR = curR.next;
            }
        }
        cur = cur.next;
    }
    if (left && right) {
        curL.next = right;
        if (head.val < x) return head;
        else return left;
    }
    return head;
};

let newList = new ListNode(1, new ListNode (4, new ListNode (3, new ListNode (2, new ListNode(5, new ListNode(2))))))
let newList2 = new ListNode(2, new ListNode(1, new ListNode(2)));

console.log(partition(newList, 3));
console.log(partition(newList2, 2));