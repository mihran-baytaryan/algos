/*

Given an arbitrarily nested array of strings, and a target keyword strong,
return the number of times a keyword appears in a nested array of arrays.

keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi') -> 2 because 'hi' appears twice
keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x') -> 3
keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol') -> 0

*/

const keywordCount = (array, keyword) => {
    let count = 0;

        array.forEach(el =>{
            if (Array.isArray(el)) count += keywordCount(el, keyword);
            else if (el === keyword) count++;
        })


    return count;
};


/*

Extension:

Given a nested array of arrays, return an array of keywords that appear the most
often. Return multiple results within the array if there's a tie. Return the
multiple in lexiographical (alphabetic) order.

keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars']) -> ['bat', 'cars']
keywordMode([['ace', 'cool'], ['hi'], 'cool']) -> ['cool']

*/

const keywordMode = array => {
    const cache = {};

    function inner(array, cache) {
        array.forEach(el => {
            if (Array.isArray(el)) {
                inner(el, cache);
            } else {
                if (!cache[el]) cache[el] = 1;
                else cache[el]++;
            }
        })
    }

    inner(array, cache);
    let max = 0;
    const results = [];

    for (const key in cache) {
        if (cache[key] > max) max = cache[key];
    }

    for (const key in cache) {
        if (cache[key] === max) results.push(key);
    }

    return results.sort();
};


module.exports = {keywordCount, keywordMode};
