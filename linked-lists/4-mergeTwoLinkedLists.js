// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//

// My Solution
const mergeTwoLinkedLists = (l1, l2) => {
    if (!l1) return l2;
    if (!l2) return l1;

    let result = new ListNode(0);

    if (l1.value < l2.value) {
        result.value = l1.value;
        result.next = mergeTwoLinkedLists(l1.next, l2);
    } else {
        result.value = l2.value;
        result.next = mergeTwoLinkedLists(l1, l2.next);
    }

    return result;
};

// Most Voted Solution (Java)
```
ListNode<Integer> mergeTwoLinkedLists(ListNode<Integer> l1, ListNode<Integer> l2) {
    if(l1==null) return l2;
    if(l2==null) return l1;
    if(l1.value<l2.value) {
        l1.next = mergeTwoLinkedLists(l1.next,l2);
        return l1;
    }

    else {
        l2.next = mergeTwoLinkedLists(l1,l2.next);
        return l2;
    }
}
```