class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
  
  let result;
  while(head?.next) {
    if(head.val === val) {
      head =  head.next;
      continue;
    }
    if(!result?.next) result = new ListNode(head.val);
    head = head.next;
    console.log(head);
    
  }
};