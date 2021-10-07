// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

// My Solution
const kthSmallestInBST = (t, k) => {
    let required;
    const traverse = root => {
        if (!root) return;
        if (root.left) traverse(root.left);
        if (k-- == 1) required = root.value;
        if (root.right) traverse(root.right);
    };
    traverse(t);
    return required;
};

// Most voted solution (Python)
```
def kthSmallestInBST(root, K):
    def dfs(node):
        if node:
            yield from dfs(node.left)
            yield node.value
            yield from dfs(node.right)

    f = dfs(root)
    for _ in range(K):
        ans = next(f)
    return ans
```