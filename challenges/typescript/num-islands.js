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
var numIslands = function (grid) {
    var islands = { 'xx': 0 };
    var count = Object.values(islands)[Object.values(islands).length - 1];
    var neighborCheck = function (point) {
        var _a;
        var neighbor = 0;
        if (islands.hasOwnProperty("".concat(+point[0] - 1).concat(point[1])))
            return islands["".concat(+point[0] - 1).concat(point[1])];
        if (islands.hasOwnProperty("".concat(point[0]).concat(+point[1] - 1)))
            return islands["".concat(point[0]).concat(+point[1] - 1)];
        if (((_a = grid[+point[0] + 1]) === null || _a === void 0 ? void 0 : _a[+point[1]]) === 1)
            neighbor = neighborCheck("".concat(+point[0] + 1).concat(point[1]));
        if (grid[+point[0]][+point[1] + 1] === 1)
            neighbor || (neighbor = neighborCheck("".concat(point[0]).concat(+point[1] + 1)));
        return neighbor;
    };
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                islands["".concat(i).concat(j)] = neighborCheck("".concat(i).concat(j)) || ++count;
            }
        }
    }
    return count;
};
module.exports = { numIslands: numIslands };
// const map: number[][] = [
//   [1]
// ]
// console.log(numIslands(map))
