function ListNode (val, next) {
    this.val = (this.val === undefined ? 0 : val);
    this.next = (this.next === undefined ? null : next);
}

var partition = function(head, x) {

    let cur = head;

    while (cur !== null) {
        
        cur = head.next;
    }
}

const list = new ListNode (0, new ListNode(1, new ListNode (2, new ListNode(3))));
partition(list);
console.log(list);