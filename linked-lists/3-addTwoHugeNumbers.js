// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

// My Solution
const addTwoHugeNumbers = (a, b) => {
    let temp;

    const reverseList = list => {
        let prev = null;
        while (list) {
            temp = list.next;
            list.next = prev;
            prev = list;
            list = temp;
        }
        return prev;
    };

    // Reversing linked list for correct notation
    a = reverseList(a);
    b = reverseList(b);

    let x, y,
        sum = null,
        carry = 0;

    // Keep adding values while below condition is true
    while (a || b || carry) {
        x = a?.value || 0;
        y = b?.value || 0;

        temp = new ListNode((carry + x + y) % 10000);
        temp.next = sum;
        sum = temp;
        carry = (carry + x + y) / 10000 | 0; // To replace 0000 with 0

        if (a) a = a.next;
        if (b) b = b.next;
    }

    return sum;
};

// Most Voted Solution (Python)
```
def addTwoHugeNumbers(a, b):
    a = reverse(a)
    b = reverse(b)

    carry = 0
    result = None

    while a is not None or b is not None or carry > 0:
        raw = ((a.value if a is not None else 0) +
               (b.value if b is not None else 0) +
               carry)

        node = ListNode(raw % 10000)
        node.next = result

        result = node
        carry = raw // 10000

        if a is not None:
            a = a.next
        if b is not None:
            b = b.next

    return result

def reverse(list):
    current = list
    previous = None

    while current is not None:
        previous, current.next, current = current, previous, current.next

    return previous
```