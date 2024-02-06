import ListNode from "./list-node";

function removeElements(head: ListNode | null, val: number): ListNode | null {
  
  let current = head;
  let previous;
  if(current?.val === val) {
    head = current.next;
  } else {
    while (current?.next) {
      previous = current;
      if(current?.next) current = current?.next;
    }
    previous.next = current?.next;
  }
  console.log("list = ", JSON.stringify(head));
  
  return head;
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
