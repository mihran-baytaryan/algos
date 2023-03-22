// const fourSum = function(nums, target) {
//   const results = [];
//   nums.sort((a,b) => a - b);

//   function inner (nums, target, current = []) {
//     if (target === 0 && current.length === 4) {
//       if (!results.length || !results.map(arr => {
//         return arr.every((el, i) => el === current[i])
//       }).includes(true)) {
//           results.push(current);
//         }
//         return;
//       }
//     if (!nums.length || current.length === 4) {
//       return;
//     }

//     inner(nums.slice(1), target, current);
//     inner(nums.slice(1), target - nums[0], current.concat(nums[0]));
    
//   }

//   inner(nums, target);

//   return results;
// }

// const fourSum = function(nums, target) {
//   const results = [];
//   nums.sort((a,b) => a - b);

//   for (let i = 0; i < nums.length - 3; i++) {
//     for (let j = i + 1; j < nums.length - 2; j++) {
//       let l = j + 1;
//       let r = nums.length - 1;
//       while (l < r) {
//         if (nums[i] + nums[j] + nums[l] + nums[r] === target) {
//           results.push([nums[i], nums[j], nums[l], nums[r]]);
//           l++;
//           r--;
//         } else if (nums[i] + nums[j] + nums[l] + nums[r] > target) {
//           r--;
//         } else {
//           l++;
//         }
//       }
//     }
//   }

//   if (results.length > 1) {
//     return results.filter((arr, i) => {
//       for (let j = i + 1; j < results.length; j++) {
//         if (i === j) continue;
//         let dup = true;
//         for (let k = 0; k < arr.length; k++) {
//           // console.log(arr[k], results[j][k])
//           if (arr[k] !== results[j][k]) {
//             dup = false;
//             break;
//           }
//         }
//         console.log(dup)
//         if (dup) return false;
//       }   
//       return true;
//     })
//   } else return results;
// }

function fourSum(nums, target) {
  const results = [];
  nums.sort((a,b) => a - b);
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j< nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let l = j + 1;
      let r = nums.length - 1;
      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r];
        if (sum < target) {
          l++;
        } else if (sum > target) {
          r--;
        } else {
          results.push([nums[i], nums[j], nums[l], nums[r]]);
          while (l < r && nums[l] === nums[l + 1]) l++;
          while (l < r && nums[r] === nums[r - 1]) r--;
          l++;
          r--;
        }
      }
    }
  }
  return results;
}

