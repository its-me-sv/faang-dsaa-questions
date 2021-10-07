// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

// My Solution
const isTreeSymmetric = (t) => {
    const isMirror = (left, right) => {
        if (!left && !right) return true;
        if (!left || !right) return false;
        if (left.value !== right.value) return false;
        return isMirror(left.left, right.right) && isMirror(left.right, right.left);
    };
    return isMirror(t?.left, t?.right);
};

// Most Voted Solution (JavaScript)
```
function check(t1, t2) {
    if (t1 == null && t2 == null) {
        return true;
    }
    if (t1 == null || t2 == null || t1.value != t2.value) {
        return false;
    }
    return check(t1.left, t2.right) && check (t1.right, t2.left);
}

function isTreeSymmetric(t) {
    return check(t, t);
}
```