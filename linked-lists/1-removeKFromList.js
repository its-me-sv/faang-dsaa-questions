// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

// My Solution
const removeKFromList = (l, k) => {
    // Removing all the occurences of k
    // that are present continuously in the start
    while (l != null && l.value == k)
        l = l.next;
    let itr = l;
    while (itr !== null) {
        // Checking if the next value is k
        // and removing it
        if (itr.next?.value === k)
            itr.next = itr.next.next;
        else
            itr = itr.next;
    }
    return l;
};

// Most Voted Solution (JavaScript)
```
function removeKFromList(l, k) {
    if (l === null) return null;
    else {
        l.next = removeKFromList(l.next, k);
        return (l.value === k) ? l.next : l
    }
}
```