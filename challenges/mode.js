/*

Given an array of numbers (integers), return the mode, that is, the number that
appears most often. If there are multiple modes, use the max of the modes.

Assume that at least one number is present in the array.

e.g.
mode([3, 2, 4, 3]) -> 3
mode([7, 5, 8, 8, 2, 5]) -> 8

*/

const mode = array => {
  const cache = array.reduce((pre, cur) => {
    if (pre[cur]) pre[cur] += 1;
    else pre[cur] = 1;
    return pre;
  },{});
  let mode = +Object.keys(cache)[0];
  for (const key in cache) {
    if (cache[key] > cache[mode]) mode = +key;
    if (cache[key] === cache[mode] && +key > mode) mode = +key;
  }
  return mode;
};

/*

Extension:

Given an arbitrarily nested array of numbers (integers), return the mode, that
is, the number that appears most often. If there are multiple modes, use the max
of the modes.

Assume that at least one number is present in the nested array structure,
although some of the nested arrays may be empty.

e.g.
mode([[3], [2, [4]], 3]) -> 3
mode([7, [[5, [8], 8], 2, 5]]) -> 8
mode([4, []]) -> 4 

*/

const modeNested = array => {

  function flatten(array, flatArray = []) {
    for (let i = 0; i < array.length; i++) {
        if (!array[i].length && typeof array[i] === 'number') flatArray.push(array[i]);
        else if (array[i].length)  flatten(array[i], flatArray); 
    }
    return flatArray;
  }
  const flattenedArray = flatten(array);
  
  const cache = flattenedArray.reduce((pre, cur) => {
    if (pre[cur]) pre[cur] += 1;
    else pre[cur] = 1;
    return pre;
  },{})

  let mode = +Object.keys(cache)[0];

  for (const key in cache) {
    if (cache[key] > cache[mode]) mode = +key;
    if (cache[key] === cache[mode] && +key > mode) mode = +key;
  }

  return mode;
};

module.exports = {mode, modeNested};


