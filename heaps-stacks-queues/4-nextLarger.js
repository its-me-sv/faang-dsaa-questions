// My solution
const solution = a => {
    const stack = [];
    const result = [];
    a = a.reverse();
    for (let val of a) {
        while (val > stack[stack.length-1]) stack.pop();
        if (stack.length > 0)
            result.push(stack[stack.length-1]);
        else
            result.push(-1);
        stack.push(val);
    }
    return result.reverse();
};

// Most voted solution (Python)
```
def solution(A):
    stack = []
    ans = []
    for x in A[::-1]:
        while stack and x > stack[-1]:
            stack.pop()
        ans.append(stack[-1] if stack else -1)
        stack.append(x)
    return ans[::-1]
```