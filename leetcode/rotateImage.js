var rotate = function(matrix) {
  const length = matrix[0].length;
  for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = 0; j < length; j++) {
      let temp = matrix[i].shift();
      matrix[j].push(temp);
    }
  }
}

const matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
rotate(matrix);
matrix;