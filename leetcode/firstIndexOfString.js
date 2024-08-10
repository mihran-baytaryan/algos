/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let output = -1;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            output = i;
            for (let k = 1; k < needle.length; k++) {
                if (haystack[i + k] !== needle[k]) {
                    output = -1;
                    break;
                }
            }
        }
        if (output !== -1) return output;
    }
    return output;
};