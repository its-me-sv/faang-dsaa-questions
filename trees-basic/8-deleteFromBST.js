// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }


// My solution
const findMax = root => {
    let itr = root;
    if (!itr) return root;
    while (itr.right)
        itr = itr.right;
    return itr;
};

const removeRight = root => {
    if (!root.right) return root.left
    else
        root.right = removeRight(root.right);
    return root;
}

const deleteNode = (root, val) => {
    if (!root) return null;
    if (val < root.value)
        root.left = deleteNode(root.left, val);
    else if (val > root.value)
        root.right = deleteNode(root.right, val);
    else {
        if (root.left) {
            root.value = findMax(root.left).value;
            root.left = removeRight(root.left);
        } else
            root = root.right;
    }
    return root;
};

const deleteFromBST = (t, queries) => {
    if (!t) return t;
    for (let val of queries)
        t = deleteNode(t, val);
    return t;
};

// Most voted solution (Java)
```
Tree<Integer> deleteFromBST(Tree<Integer> t, int[] queries) {
    for (int query : queries) {
        t = deleteFromTree(t, query);
    }
    return t;
}

Tree<Integer> deleteFromTree(Tree<Integer> t, int target) {
    if (t == null) return t; //bottom of recursion if we can't find value

    if (target < t.value) {
        t.left = deleteFromTree(t.left, target);
        return t;
    }
    if (target > t.value) {
        t.right = deleteFromTree(t.right, target);
        return t;
    }

    //else found value, so delete from tree

    //only one child so connect parent with right subtree
    if (t.left == null) return t.right;
//    if (t.right == null) return t.left; - this is the usual if we had a normal BST delete operation, but we don't as per description

    Tree<Integer> current = t;
    t = max(current.left);
    t.left = deleteMax(current.left);
    t.right = current.right;

    return t;
}

Tree<Integer> max(Tree<Integer> t) {
    if (t.right == null) return t;
    return max(t.right);
}


Tree<Integer> deleteMax(Tree<Integer> t) {
      if (t.right == null) return t.left;
      t.right = deleteMax(t.right);
      return t;
}
```