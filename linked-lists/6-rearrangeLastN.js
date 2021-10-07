// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

// My Solution
const rearrangeLastN = (l, n) => {
    let totalLength = 0;
    let itr = l;
    // Finding total no. of elements
    while (itr !== null) {
        totalLength += 1;
        itr = itr.next;
    }
    itr = l;
    // Checking for constraints that 
    // result in orginal linked list
    if (totalLength < 2 || n === 0 || totalLength === n)
        return l;
    // Iterating till (n - 1)th node from last
    for (let i = 0; i < totalLength - n - 1; i += 1)
        itr = itr.next;
    // Setting new head to nth node from last
    let newHead = itr.next;
    // Breaking link between last (n-1)th and
    // last nth node
    itr.next = null;
    itr = newHead;
    // Iterating till the 
    // last node of new head
    while (itr.next !== null)
        itr = itr.next;
    // Setting the next of last node's to
    // orginal head to add the previous
    // nodes at the last
    itr.next = l;
    return newHead;
};

// Most Voted Solution (Java)
```
ListNode<Integer> rearrangeLastN(ListNode<Integer> l, int n) {

    if (null == l || n == 0) return l;

    ListNode fast = l, slow = l;

    while(n > 0 && fast != null) {
        fast = fast.next;
        n--;
    }

    if (n >= 0 && fast == null) return l;

    while (fast.next != null) {
        slow = slow.next;
        fast = fast.next;
    }

    ListNode newHead = slow.next;
    slow.next = null;
    fast.next = l;

    return newHead;
}
```