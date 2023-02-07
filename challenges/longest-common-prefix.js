/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". (Note: All given inputs are in lowercase letters a-z.)

ex: longestCommonPrefix(["flower","flow","flight"]) --> "fl"

longestCommonPrefix(["dog","racecar","car"]) --> "" (There is no common prefix among the input strings)

*/

const longestCommonPrefix = (strs) => {
  if (!strs.length) return '';
  return strs.reduce((cur, prev) => {
    let result = '';
    for (let i = 0; i < cur.length && i < prev.length; i++) {
      if (prev[i] === cur[i]) result += prev[i];
      else break;
    }
    return result;
  })
};

module.exports = { longestCommonPrefix };
console.log(longestCommonPrefix([]));