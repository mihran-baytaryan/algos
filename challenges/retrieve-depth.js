/*

Given an arbitrarily nested array of numbers and a positive integer "depth",
return a new array consisting of the numbers with depth less than or equal to
the provided depth, in order of appearance.

The original array is considered to be at depth 1, and inner arrays are at
greater depth.

For example:

retrieveDepth([2, [4, [7], 1], 5], 1) -> [2, 5] because only the 2 and 5 are at
"depth 1", and everything else is too deep. The 4 and 1 are at "depth 2", and
the 7 is at "depth 3".

retrieveDepth([2, [4, [7], 1], 5], 2) -> [2, 4, 1, 5] becuase the 2 and 5 are at
"depth 1", the 4 and 1 are at "depth 2", and the 7 is too deep because it's at
"depth 3".

retrieveDepth([2, [4, [7], 1], 5], 3) -> [2, 4, 7, 1, 5] because every number
is within "depth 3". No number is deeper.

*/

const retrieveDepth = (arr, depth) => { //edge case or not part of problem?

  const result = [];

  function inner(arr) {
    if (depth < 1) return;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') result.push(arr[i]);
      else if (Array.isArray(arr[i])) {
        depth --;
        inner(arr[i]);
      }
    }
  }

  inner(arr);
  return result;

}

console.log(retrieveDepth([2, [4, [7], 1], [3, [6]], 5], 2))

/*

Extension:

Given an arbitrarily nested array of numbers and a nonnegative integer "depth",
return a new nested array that's flattened to a certain level of depth.

Flattening at "depth 0" just returns the same array.
Flattening at "depth 1" returns the array flattened at just one level.

For example:

flattenDepth([2, [4, [7], 1], 5], 0)
  -> [2, [4, [7], 1], 5] // the same array

flattenDepth([2, [4, [7], 1], 5], 1)
  -> [2, 4, [7], 1, 5] // flattened at one level

flattenDepth([2, [4, [7], 1], 5], 2)
  -> [2, 4, 7, 1, 5] // flattened at two levels

flattenDepth([2, [4, [7], 1], 5], 3)
  -> [2, 4, 7, 1, 5] // flattening at greater levels just produces a completely
flattened array

*/

const flattenDepth = (arr, depth) => {
  let result = [...arr];
  let temp = [...arr];
  let counter = depth;
  
  function inner(arr, counter){
    if (counter === 0) return result;
    result = [];
    counter--;
    for (let i = 0; i < temp.length; i++) {
      if (Array.isArray(arr[i])) result.push(...arr[i]);
      else result.push(arr[i]);
    }
    temp = [...result];
    return inner(temp, counter);
  }

  return inner(temp, counter);
};


module.exports = {retrieveDepth, flattenDepth};
