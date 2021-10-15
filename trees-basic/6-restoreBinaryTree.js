// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

// My Solution
const restoreBinaryTree = (inorder, preorder) => {
    if (!preorder.length) return null;
    let root = new Tree(preorder[0]);
    let index = inorder.findIndex(val => val === preorder[0]);
    root.left = restoreBinaryTree(inorder.slice(0, index), preorder.slice(1, index + 1));
    root.right = restoreBinaryTree(inorder.slice(index + 1), preorder.slice(index + 1));
    return root;
};

// Most Voted Solution (Python)
```
def restoreBinaryTree(inorder, preorder):
  if not preorder:
    return None
  root = Tree(preorder[0])
  i = inorder.index(preorder[0])
  root.left = restoreBinaryTree(inorder[:i], preorder[1:i+1])
  root.right = restoreBinaryTree(inorder[i+1:],preorder[i+1:])
  return root
```