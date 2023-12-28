// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function hasCycle(head: ListNode | null): boolean {
    const valuesSet: Set<number> = new Set();
    while(head?.next) {
      if(valuesSet.has(head.val)) return true;
      valuesSet.add(head.val);
      head = head.next;
    }
    return false;
};