// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

// My Solution
const helper = (t1, t2) => {
    if (!t1 && !t2) return true;
    if (!t1 || !t2) return false;
    if (t1.value != t2.value) return false;
    return helper(t1.left, t2.left) && helper(t1.right, t2.right);
};

const isSubtree = (t1, t2) => {
    if (!t2) return true;
    if (!t1) return false;
    return helper(t1, t2) || isSubtree(t1.left, t2) || isSubtree(t1.right, t2);
};

// Most Voted Solution (JavaScript)
```
function isSubtree(t1, t2) {
    return JSON.stringify(t1).indexOf(JSON.stringify(t2)) !== -1
}
```