const threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let answer = nums[0]+nums[1]+nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const sum = nums[i]+nums[l]+nums[r];
      if (sum > target) {
        r--;
      } else {
        l++;
      }
      if (Math.abs(target - sum) < Math.abs(target - answer)) answer = sum;
    }
  }
  return answer;
}