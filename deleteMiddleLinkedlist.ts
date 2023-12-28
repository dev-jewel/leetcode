/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function deleteMiddle(head: ListNode | null): ListNode | null {

  let size = 0;
  let current = head;
  while(current?.next) {
    size++;
    current = current.next;
  }
  let index = 0;
  console.log( Math.floor((size + 1)/2));

  let result = new ListNode(head?.val);

  while(head?.next) {
    console.log("index ", index);
    if(index === Math.floor((size + 1)/2)) {
      result.next = head.next.next;
    }
    const currentList = new ListNode(head.val);
    head = head.next;
    result.next = currentList;
    index++;
  }

  return result;
};

console.log(deleteMiddle({"val":0,"next":{"val":1,"next":{"val":4,"next":{"val":-2,"next":{"val":-2,"next":null}}}}}));