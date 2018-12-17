var addTwoNumbers = (l1, l2) => {
  let keep = 0;
  let head = new ListNode(0);
  let current = head;

  while (l1 || l2 || keep) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + keep;
    keep = sum >= 10 ? 1 : 0;
    current.next = new ListNode(sum % 10);
    current = current.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  if (keep) {
    current.next = new ListNode(keep);
  }

  return head.next;
};
