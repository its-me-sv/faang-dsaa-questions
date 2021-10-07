// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

// My Solution
const reverseNodesInKGroups = (l, k) => {
    // Check for empty linked list or k = 1 (no change)
    if (!l || k === 1) return l;
    let itr = l,
        prev = null,
        temp = null;
    // Check whether atleast 
    // k elements are present in group
    for (let i = 0; i < k; i += 1) {
        // Less than k elements in group
        if (!itr) return l;
        itr = itr.next;
    }
    itr = l;
    let cnt = 0;
    // Reversing the first k elements
    while (itr !== null && cnt < k) {
        temp = itr.next;
        itr.next = prev;
        prev = itr;
        itr = temp;
        cnt += 1;
    }
    // Pointing the next of the Head
    // to the next group of elements
    if (temp)
        l.next = reverseNodesInKGroups(temp, k);
    return prev;
};

// Most Voted Solution (Python)
```
# Definition for singly-linked list:
# class ListNode(object):
#   def __init__(self, x):
#     self.value = x
#     self.next = None
#
def reverseNodesInKGroups(A, K):
    cur = A
    for _ in xrange(K):
        if not cur: return A
        cur = cur.next

    ans, cur = A, A.next
    for _ in xrange(K-1):
        cur.next, cur, ans = ans, cur.next, cur
    A.next = reverseNodesInKGroups(cur, K)
    return ans
```