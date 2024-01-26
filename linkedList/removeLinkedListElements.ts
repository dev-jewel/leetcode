import ListNode from "./list-node";

function removeElements(head: ListNode | null, val: number): ListNode | null {
  console.log(head);
  
  let current = head;
  let previous;
  while (current) {
    if(current.val !== val) {
      previous = current;
      current = current?.next;
    } else current = current.next?.next;
  }
  console.log("list = ", previous);
  
  return previous;
}

console.log(
  removeElements({
    val: 1,
    next: {
      val: 2,
      next: {
        val: 6,
        next: {
          val: 3,
          next: { 
            val: 4, 
            next: { 
              val: 5, 
              next: { 
                val: 6, 
                next: null 
              }
            }
          }
        }
      }
    }
  }, 6)
);
