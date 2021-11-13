// My Solution
const repeatString = (s, n) => [...new Array(n)].map(() => s).join('');

const decodeString = s => {
    let result = "";
    let stack = [];
    let open = false;
    let i = 0;
    let k = "";
    while (i < s.length) {
        if ("0123456789".includes(s[i])) k += s[i];
        else {
            if (k.length > 0) stack.push(+k);
            k = "";
            if (s[i] === '[') {
                stack.push('[');
                open = true;
            } else if (s[i] === ']') {
                let openPos = stack.length - 1;
                while (stack[openPos] !== '[')
                    openPos -= 1;
                let encodedString = stack.slice(openPos + 1).join('');
                stack = stack.slice(0, openPos);
                let repeatedString = repeatString(encodedString, stack.pop());
                if (stack.length > 0) stack.push(repeatedString);
                else result += repeatedString;
                open = stack.length > 0;
            } else {
                if (open) stack.push(s[i]);
                else result += s[i];
            }
        }
        i += 1;
    }
    return result;
};

// Most Voted Solution (Java)
```
String decodeString(String s) {
    Stack<Integer> intStack = new Stack();
    Stack<StringBuilder> strStack = new Stack();
    StringBuilder curr = new StringBuilder();
    int k = 0;

        for (char ch: s.toCharArray()) {
            if (Character.isDigit(ch)) {
                k = k * 10 + ch - '0';
            } else if (ch == '[') {
                intStack.push(k);
                strStack.push(curr);
                curr = new StringBuilder();
                k = 0;
            } else if (ch == ']') {
                StringBuilder tmp = curr;
                curr = strStack.pop();
                for(int i = intStack.pop(); i > 0; i--) {
                    curr.append(tmp);
                }
            } else {
                curr.append(ch);
            }
        }
        return curr.toString();
}

```