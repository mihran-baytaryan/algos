function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}


/*

Given the root of a binary search tree, determine the difference of the maximum
and minimum value.

Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

Ex:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

returns 8, becuase 9 - 1 = 8

*/

const bstMinMax = root => {
  let current = root;
  let min;
  let max;
  while(current !== null) {
    min = current.value;
    current = current.left;
  }
  current = root;
  while (current !== null) {
    max = current.value;
    current = current.right;
  }
  return max - min;
};

/*

Extension: (not necessarily related in technique to above problem, but
nevertheless still a BST problem)

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two
given nodes "p" and "q" in the BST. Return the LCA node itself.

Ex:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

The LCA of node 1 and node 3 is node 2.
The LCA of node 8 and node 9 is node 9.
The LCA of node 2 and node 8 is node 4.

*/

const lowestCommonAncestor = (root, p, q) => {
  const reverseBinarySearch = (root, x) => {
    let result = new Set();
    let current = root;
    while (current !== null) {
      result.add(current);
      if (x.value === current.value) return result;
      else if (x.value < current.value) current = current.left;
      else current = current.right;
    }
  }
  let ancestorsP = reverseBinarySearch(root, p);
  let ancestorsQ = reverseBinarySearch(root, q);
  let lowestCommonAncestor;
  ancestorsP.forEach(el => {
    if (ancestorsQ.has(el)) lowestCommonAncestor = el;
  });
  return lowestCommonAncestor;
};

module.exports = {BinarySearchTree, bstMinMax, lowestCommonAncestor};

