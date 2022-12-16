/*
 define a function "fastCache" that takes one argument, a function, and returns a function. 
 When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. 
 Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.
*/

const fastCache = func => {

    cache = {};

    return function (input) {
        if (cache[input] !== undefined) return cache[input];
        cache[input] = func(input);
        return cache[input];
    }
  
};

/*
 Extension: Rewrite fastCache so it can handle array or object input, and any number of arguments.
 HINT: you might need to use the spread operator...
*/

const fastCacheAdvanced = func => {           //getting right answer but calling less times than expected for last example of last test?

    cache = new Map;

    return function (...args) {
        if (cache[args] !== undefined) return cache[args];
        cache[args] = func(...args);
        return cache[args];
    }
  
};

const pluralizedKeys = (...objs) => {
    return objs.reduce((pluralizedKeys, obj) => {
      return pluralizedKeys.concat(Object.keys(obj).map(key => `${key}s`));
    }, [])
  };

console.log(pluralizedKeys({'cat': true}, {'dog': true, 'frog': true}))

const cachedPlural = fastCacheAdvanced(pluralizedKeys);

const result = cachedPlural({'cat': true}, {'dog': true, 'frog': true});

console.log(result);

module.exports = {fastCache, fastCacheAdvanced};