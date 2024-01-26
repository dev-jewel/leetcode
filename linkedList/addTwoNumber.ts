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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

  function addStrings(num1: string, num2: string): string {
    const maxLength = num1.length > num2.length ? num1.length : num2.length;
    let resultStr = "";
    let memorizedDecade = 0;
    for(let i = 0; i < maxLength; i++) {
      let current1 = num1[num1.length - i - 1] || "";
      let current2 = num2[num2.length - i - 1] || "";
      
      if(memorizedDecade + +current1+ +current2 >= 10 && (maxLength - i - 1 === 0)) {
        resultStr = "1" + (memorizedDecade + +current1+ +current2 - 10) + resultStr;
      }
      else if(memorizedDecade + +current1+ +current2 >= 10) {
        resultStr = (memorizedDecade + +current1+ +current2 - 10) + resultStr;
        memorizedDecade = 1;
      }
      else {
        resultStr = (memorizedDecade + +current1+ +current2) + resultStr;
        memorizedDecade = 0;
      }
    }  
  
    return resultStr;
  };

  let str1: string = "";
  let str2: string = "";
  while(l1) {
    str1 = l1.val + str1;
    l1 = l1.next;
  }

  while(l2) {
    str2 = l2.val + str2;
    l2 = l2.next;
  }
  const resStr = addStrings(str1, str2);
 
  let result: ListNode | null = null;
  
  for(let i = 0; i < resStr.length; i++) {
    
    const currentList = new ListNode(+resStr[i], null);
    currentList.next = result;
    result = currentList;
  }
  return result;
};


console.log(addTwoNumbers({val: 2, next: { val: 4, next: { val: 3, next: null } }}, {val: 5, next: { val: 6, next: { val: 4, next: null } }}));
