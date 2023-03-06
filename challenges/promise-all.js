/*

Write a function that works the same as Promise.all

From MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

The Promise.all() method returns a single Promise that resolves when all of the
promises passed as an iterable have resolved or when the iterable contains no
promises. It rejects with the reason of the first promise that rejects.

Hint:

use the Promise constructor. The Promise constructor takes in two arguments:
"resolve" and "reject". Calling "resolve" on a value will complete will the
value. Calling "reject" on a value will error-out with the value.

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
for info on the Promise constructor.

*/

const promiseAll = promises => {
  const n = promises.length;

  return new Promise((resolve, reject) => {
    let completed = 0;
    const results = new Array(n).fill(null);

    promises.forEach((promise, i) => {
      promise
        .then(result => {
          completed++;
          results[i] = result;

          if (completed === n) resolve(results);
        })
        .catch(err => {
          reject(err);
        });
    });
  });
};


module.exports = {promiseAll};

