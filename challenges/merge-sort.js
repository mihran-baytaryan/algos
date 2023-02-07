/* 
  Given an array of integers, sort and return the array.
  The sorted integers should be in ascending order from left to right.
  Do not use the array sort method built in to the array prototype while solving the
  problem. 

  We will sort the array using a strategy called merge sort, which functions as follows:
  First, split the array by half until each array contains a single element.
  Then, compare each set of elements and combine them into a sorted pair.
  Next, compare sorted sets of elements and combine them in order to form a new sorted array.
  Continue this process until the entire array is sorted.

*/

const mergeSort = array => {
  if (array.length < 2) return array;
  const mid = Math.floor(array.length/2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));
  return merge(left, right);

  function merge (left, right) {
    const merged = [];
    let indL = 0, indR = 0;
    while (left[indL] !== undefined || right[indR] !== undefined) {
      if (left[indL] <= right[indR]) merged.push(left[indL++]);
      else if (left[indL] > right[indR]) merged.push(right[indR++]);
      else if (right[indR] === undefined) merged.push(left[indL++]);
      else if (left[indL] === undefined) merged.push(right[indR++]);
    }
    return merged;
  }
}

module.exports = { mergeSort };