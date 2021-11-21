// My solution
const solution = operations => {
    const stack = [];
    const result = [];
    for (let operation of operations) {
        let splitOperation = operation.split(' ');
        if (splitOperation.length == 1) {
            if (splitOperation[0] === "min") result.push(Math.min(...stack));
            else stack.pop();
        } else {
            stack.push(+splitOperation[1]);
        }
    }
    return result;
};

// Most voted solution (Python)
```
def solution(operations):
    stack = []
    ans = []
    for op in operations:
        if op == 'min':
            ans.append(stack[-1])
        elif op == "pop":
            stack.pop()
        else:
            n = int(op.split()[1])
            if stack:
                stack.append(min(stack[-1], n))
            else:
                stack.append(n)
    return ans
```