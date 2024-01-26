import ListNode from "./list-node";

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


function getDecimalValue(head: ListNode | null): number {
  let listSize: number = 0;
  let result: number = 0;
  if(!head) return 0; 
  let myList: ListNode | null = head;
  while(myList) {
    listSize++;
    myList = myList.next;
  }

  while(head) {    
    result += (2 ** (--listSize)) * head.val;
    head = head.next;
  }

  return result;
};

console.log(getDecimalValue({val: 1, next: { val: 0, next: { val: 1, next: null } }}));
