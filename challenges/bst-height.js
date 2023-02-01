function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Find the tallest height of a binary search tree.

Ex. the tallest height of:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

is 3, because the tallest height of the tree connects the numbers 4 - 7 - 9 - 8
and has 3 links.

*/

const bstHeight = tree => {
  let height = 0;
  const queue = [];
  let current = {
    node: tree,
    height: 0
  }
  while (current?.node) {
    if (current.height >= height) height = current.height;
    if (current.node.left !== null) queue.unshift({node: current.node.left, height: current.height + 1});
    if (current.node.right !== null) queue.unshift({node: current.node.right, height: current.height + 1});
    current = queue.pop();
  }
  return height;
};

/*
  Extension:

  Write a function to see if a binary tree is "superbalanced".
  An empty tree is balanced. A non-empty binary tree T is balanced if:
    1) Left subtree of T is balanced
    2) Right subtree of T is balanced
    3) The difference between heights of left subtree and right subtree is not more than 1.
  example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF

  A superbalanced tree is a tree that is balanced at every subtree level as well.

  Ex. 
        4                       4
      /   \                   /   \
     2     7                2       7
    / \     \             /  \     /  \
   1   3     9           1    3   5    9
            /                         /
           8                         8

  The tree on the left is balanced - height of left side is 2, height of right side is 3.
  But, it is not superbalanced since for the 7 subtree, height of left is 0, height of right is 2.
  
  The tree on the right is superbalanced since the difference in height is not more than 1 at any given subtree.
 */

const superbalanced = tree => {
  let current = tree;
  let queue = [];

  while (current) {
    
    if (current.left !== null) queue.unshift(current.left);
    if (current.right !== null) queue.unshift(current.right);
    if (Math.abs(bstHeight(queue[0]) - bstHeight(queue[1])) > 1) return false;
    current = queue.pop();
  }

  return true;
};

module.exports = {BinarySearchTree, bstHeight, superbalanced};
