// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }
function middleNode(head: ListNode | null): ListNode | null {
    
  let size = 0;
  let current = head;
  while(current?.next) {
    size++;
    current = current.next;
  }
  if(size === 0) return head;
  let middle = Math.floor((size + 1)/2);
  while(middle > 0) {
    if(head?.next) {
      head = head.next;
    }
    middle--;
  }

  return head;  
};

console.log(middleNode({"val":0,"next":null}));