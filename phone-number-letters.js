function letterCombinations (digits) {
  const cache = {}
  let charCode = 97;
  for (let i = 2; i < 10; i++) {
    if (i === 7 || i === 9) {
      cache[i] = [String.fromCharCode(charCode), String.fromCharCode(charCode + 1), String.fromCharCode(charCode + 2), String.fromCharCode(charCode + 3)]
      charCode += 4;
    } else {
      cache[i] = [String.fromCharCode(charCode), String.fromCharCode(charCode + 1), String.fromCharCode(charCode + 2)]
      charCode += 3;
    }
  }

  const result = function inner (nums, combs = []) {
    if (!nums.length) return combs[0];
    
    if (!combs.length) {
      combs.push (...cache[nums[0]])
    } else {
      const currentCombs = [];
      for (let i = 0; i < cache[nums[0]].length; i++) {
        currentCombs.push(combs[0] + cache[nums[0]][i])
      }
      combs = currentCombs;
    }

    for (let i = 0; i < combs.length; i++) {
      combs[i] = inner(nums.slice(1), [combs[i]])
    }
    return combs;
  }(digits)

  // return result.flat(digits.length - 1);

  return function flatten(arr, results = []) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) flatten(arr[i], results)
      else results.push(arr[i])
    }
    return results;
  }(result)
  
}

