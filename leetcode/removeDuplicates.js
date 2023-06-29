var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let k = j + 1;
    if (nums[i] === nums[j]) {
      while (nums[j] === nums[k]) {
        k++;
      }
      while (nums[i] === nums[j]) {
        nums[j] = (typeof(nums[k]) === 'number' ? nums[k] : '_')
        j++;
      }
    }
  }
  return nums.slice(0, (nums.indexOf('_') !== -1 ? nums.indexOf('_') : nums.length)).length;
}
