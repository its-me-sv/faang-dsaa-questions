// My solution
const simplifyPath = path => {
    let splittedPath = path.split('/');
    const stack = [];
    for (let val of splittedPath) {
        if (stack.length != 0 && val === "..") stack.pop();
        else if (!['', '.', '..'].includes(val)) stack.push(val);
    }
    return `/${stack.join('/')}`;
};

// Most voted solution (Java)
```
String simplifyPath(String path) {
        Stack<String> stack = new Stack<>();

        for (String s : path.split("/")) {
            if ("..".equals(s)) {
                if (!stack.isEmpty()) {
                    stack.pop();
                }
            } else if (!s.isEmpty() && !".".equals(s)) {
                stack.push(s);
            }
        }

        return "/" + String.join("/", stack);
}
```