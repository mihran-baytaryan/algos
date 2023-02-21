/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 * @see: Permutations: https://stattrek.com/statistics/dictionary.aspx?definition=permutation
 * @see: Palindromes: https://examples.yourdictionary.com/palindrome-examples.html
 *
 * In terms of time complexity, see if you can solve this in O(n) / linear time.
 * 
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 * Hint: Think about the length of the string and how that relates to the frequencies of the characters
 */

const permPalin = str => {
  if (typeof str !== 'string') return false;

  const cache = [...str].reduce((pre, cur) => {
    if (pre[cur]) delete pre[cur];
    else pre[cur] = 1;
    return pre;
  }, {})

  if (str.length % 2 !== 0 && Object.values(cache).length > 1) return false;
  if (str.length % 2 === 0 && Object.values(cache).length) return false;
  
  return true;
};

/* 
 * Extension: Solve in constant space complexity.
 */
const permPalinAdvanced = str => {

};

module.exports = { permPalin };