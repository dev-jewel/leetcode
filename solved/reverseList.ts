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

function reverseList(head: ListNode | null): ListNode | null {

  let result;
  if(head?.val === 0 || head?.val) {
    result = new ListNode(head?.val);
  } else return null;

  while(head?.next) {
    head = head.next;
    const currentList = new ListNode(head.val);
    currentList.next = result;
    result = currentList;
  }  

  return result;
}


console.log(reverseList({"val":0,"next":{"val":1,"next":{"val":4,"next":{"val":-2,"next":null}}}}));
