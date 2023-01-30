function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Given the root of a binary search tree and a callback function, apply the
callback to the values of the BST in breadth-first order.

Example:

If the tree is

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

then apply the callback on the numbers in the order:
4, 2, 7, 1, 3, 9, 8.

Hint:

Maintain a queue (array) consisting of the nodes we need to operate on.
For each node in the queue, push the left and right children (if applicable) to
the end of the queue. Keep consuming the queue (using the shift method) until
there are no more nodes in the queue.

Utilizing recursion is not necessary, nor recommended.

*/

const bfs = (root, callback) => {
  let current = root;
  let queue = [current];


  while (current) {
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right) 
    }
    current = queue[queue.indexOf(current) + 1];
  }

  queue.forEach(el => callback(el.value));
  
};


/*

Extension:

Given a 2D grid of 0s, 1s, and a single 2, with the start position the top-left
corner, determine the minimum distance need to travel to the 2.

0s represent traversable land.
1s represent "water" that we cannot traverse.
2 represents our final goal.

The top-left corner will always be a 0. We will try to reach the 2 by
traversing through land. We are only allowed to traverse up/left/down/right,
with no diagonal movement allowed. If the 2 cannot be reached, return -1.

Examples:

Input:
[
  [0, 0, 1, 1],
  [2, 0, 1, 0],
  [1, 0, 0, 0]
]
Output: 1 (starting at the top-left corner, move down)

Input:
[
  [0, 0, 1, 1],
  [0, 0, 1, 2],
  [1, 0, 0, 0]
]
Output: 6 (starting at the top-left corner, either move
down-right-down-right-right-up, or right-down-down-right-right-up)

Input:
[
  [0, 0, 0, 1, 1, 0, 2, 0]
]
Output: -1 (the 2 is not reachable by land)

Hint:

Apply the general principles of breadth-first search. Maintain a queue of
positions with their distances. When consuming each position, check to see which
neighbors are traversable and haven't already been visited.

*/

const minimumDistance = grid => {
  let cur = {
    val: 0,
    x: 0,
    y: 0,
    steps: 0,
  }
  let queue = [cur];
  let traversed = [];

  while (queue.length) {

    if (cur.val === 2 ) return cur.steps;
    traversed.push(`${cur.x}${cur.y}`);
    
    if (cur.x - 1 > 0 && grid[cur.x - 1][cur.y] !== 1 && !traversed.includes(`${cur.x - 1}${cur.y}`)) {
      queue.unshift({
        ...cur,
        val: grid[cur.x-1][cur.y],
        x: cur.x - 1,
        steps: cur.steps + 1
      })
    }

    if (cur.x + 1 < grid.length && grid[cur.x + 1][cur.y] !== 1 && !traversed.includes(`${cur.x + 1}${cur.y}`)) {
      queue.unshift({
        ...cur,
        val: grid[cur.x + 1][cur.y],
        x: cur.x + 1,
        steps: cur.steps + 1
      })
    }

    if (cur.y - 1 > 0 && grid[cur.x][cur.y-1] !== 1 && !traversed.includes(`${cur.x}${cur.y - 1}`)) {
      queue.unshift({
        ...cur,
        val: grid[cur.x][cur.y-1],
        y: cur.y - 1,
        steps: cur.steps + 1
      })
    }

    if (cur.y + 1 < grid[cur.x].length && grid[cur.x][cur.y+1] !== 1 && !traversed.includes(`${cur.x}${cur.y + 1}`)) {
      queue.unshift({
        ...cur,
        val: grid[cur.x][cur.y+1],
        y: cur.y + 1,
        steps: cur.steps + 1
      })
    }


    
    queue.pop();
    cur = queue[queue.length - 1];
  }

  return -1;
  
};



module.exports = {BinarySearchTree, bfs, minimumDistance};

const input = 
[
  [0, 0, 1, 1],
  [0, 0, 1, 2],
  [1, 0, 0, 1]
]



