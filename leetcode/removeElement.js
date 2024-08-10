/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

//declare a variable 'right' initialized with a value of nums.length-1(final index), iterate through the array in reverse looking for an element not equal to val or until right < 0
//if index of above = -1 return 0, if 0 return 1, if > 1 continue
//declare variables 'left' and 'k' initialized at 0
//iterate through array until left > right:
 //if nums[left] !== val, left++ and k++
 //if nums[left] === val, swap left with right, left++ and right--
var removeElement = function(nums, val) {

    let right = nums.length - 1;
    let left = 0;
    let k = 0;
    while (nums[right] === val && right >= 0) {
        right--;
    }
    if (right === 0) return 1;
    if (right === -1) return 0;
    while (left <= right) {
        if (nums[left] !== val) {
            k++;
            left++;
        } else {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            right--;
        }
    }
    return k;
};

nums = [3, 2, 2, 3];
console.log(nums)
console.log(removeElement(nums, 3))
console.log(nums)