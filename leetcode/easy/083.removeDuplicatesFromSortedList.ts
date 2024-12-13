// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let current = head;

  while (current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}

const listNode = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))));
const result = deleteDuplicates(listNode);
console.log(result);
export {}