/*

Given a 2d grid map of 1s (land) and 0s (water), count the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands
horizontally or vertically. You may assume all four edges of the grid are all
surrounded by water.

EXAMPLE 1:

Input:
[
  [0, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
Output: 1

Input:
[
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
]
Output: 3

Assume that the grid will be an array of arrays of numbers either 0 or 1, and
that the grid will have at least one element.

*/

const numIslands = (grid: number[][]): number => {
  type Island = {
    [key: string] : number
  }

  const islands: Island = {'xx': 0};

  let count: number = Object.values(islands)[Object.values(islands).length - 1]

  const neighborCheck = (point: string): number => {
    let neighbor: number = 0;

    if (islands.hasOwnProperty(`${+point[0] - 1}${point[1]}`)) return islands[`${+point[0] - 1}${point[1]}`];
    if (islands.hasOwnProperty(`${point[0]}${+point[1] - 1}`)) return islands[`${point[0]}${+point[1] - 1}`];

    if (grid[+point[0] + 1]?.[+point[1]] === 1) neighbor = neighborCheck(`${+point[0] + 1}${point[1]}`);
    if (grid[+point[0]][+point[1]  + 1] === 1) neighbor ||= neighborCheck(`${point[0]}${+point[1] + 1}`);

    return neighbor;
  }

  for (let i: number = 0; i < grid.length; i++) {
    for (let j: number = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        islands[`${i}${j}`] = neighborCheck(`${i}${j}`) || ++count
      }
    }
  }

  return count;
};

module.exports = { numIslands };

// const map: number[][] = [
//   [1]
// ]

// console.log(numIslands(map))