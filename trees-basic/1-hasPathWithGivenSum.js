// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

// My Solution
const hasPathWithGivenSum = (t, s, sum = 0) => {
    if (!t) return false;
    if (!t.left && !t.right)
        return sum + t.value == s;
    let leftTry, rightTry;
    if (t.left)
        leftTry = hasPathWithGivenSum(t.left, s, sum + t.value);
    if (t.right)
        rightTry = hasPathWithGivenSum(t.right, s, sum + t.value);
    return leftTry || rightTry || false;
};

// Most Voted Solution (JavaScript)
```
function hasPathWithGivenSum(t, s) {
    if (!t) return s === 0;
    s -= t.value;
    return hasPathWithGivenSum(t.left, s) ||
           hasPathWithGivenSum(t.right, s);
}
```