function threeSum (nums) {
  const results = [];
  nums.sort((a,b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    // if(i > 0 && nums[i] === nums[i-1] ) continue;
    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      if ((nums[i] + nums[l] + nums[r]) === 0) {
        results.push([nums[i], nums[l], nums[r]])
        l++;
        r--;
      }else if (nums[i] + nums[l] + nums[r] > 0) {
        r--;
      }else {
        l++;
      }
    }
  }
  const stringArray = results.map(JSON.stringify);
  const uniqueArray = new Set(stringArray);
  const uniqueStringArray = Array.from(uniqueArray);
  const resultArray = uniqueStringArray.map(JSON.parse);
  return resultArray;
}


// const array = [];

// for (let i = 0; i < 3000; i++) {
//   array.push(Math.floor(Math.random() * (Math.floor(10**5) - (-Math.ceil((10**5))) + 1) + (-Math.ceil((10**5)))))
// }

// console.log(array);
// console.log(threeSum(array));