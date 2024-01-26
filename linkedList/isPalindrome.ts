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

import ListNode from "./list-node";

function isPalindrome(head: ListNode | null): boolean {
  let str: string = "";
  while(head) {
    str += head.val;
    head = head.next;
  }
  for(let i = 0; i < str.length / 2; i++) {
    if(str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
};